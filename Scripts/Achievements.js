/*
 * === ABOUT US ===
 * @name:		Orbitron
 * @website:	http://www.team-orbitron.com
 * === ABOUT PROJECT ===
 * @author:		Orbitron
 * @project:	Achievements
 * @version:	v1.0.6
 * @website:	https://raw.githubusercontent.com/OfficialOrbitron/ModPE/master/Scripts/Achievements.js
 *
 * Testet with:
 * MCPE: v0.9.5
 * BlockLauncher: v1.7.9
 *
 */

// Project info
var project		= "Achievements";
var sname		= "ACH";
var version		= "1.0.6";
var author		= "Orbitron";

// Values
var achievement	= [
	{
		"id": 1,
		"reached": false,
		"message": "Monster Hunter!"
	},
	{
		"id": 2,
		"reached": false,
		"message": "Cow Tipper"
	},
	{
		"id": 3,
		"reached": false,
		"message": "Sniper Duel"
	},
	{
		"id": 4,
		"reached": false,
		"message": "Getting Wood"
	},
	{
		"id": 5,
		"reached": false,
		"message": "DIAMONDS!"
	},
	{
		"id": 6,
		"reached": false,
		"message": "Benchmarking"
	},
	{
		"id": 7,
		"reached": false,
		"message": "Hot Topic"
	},
	{
		"id": 8,
		"reached": false,
		"message": "Time to Mine!"
	},
	{
		"id": 9,
		"reached": false,
		"message": "Acquire Hardware"
	},
	{
		"id": 10,
		"reached": false,
		"message": "Time to Farm!"
	},
	{
		"id": 11,
		"reached": false,
		"message": "Bake Bread"
	},
	{
		"id": 12,
		"reached": false,
		"message": "The Lie"
	},
	{
		"id": 13,
		"reached": false,
		"message": "Getting an Upgrade"
	},
	{
		"id": 14,
		"reached": false,
		"message": "Time to Strike!"
	},
	{
		"id": 15,
		"reached": false,
		"message": "Librarian"
	}
];

// Main functions
function useItem(x, y, z, itemId, blockId, side)
{
	if(achievement[6]["reached"] === true && itemId == 58)
	{
		addonShowAchievement(6);
	}
	if(achievement[7]["reached"] === true && itemId == 61)
	{
		addonShowAchievement(7);
	}
	if(achievement[8]["reached"] === true && itemId == 270)
	{
		addonShowAchievement(8);
	}
	if(achievement[9]["reached"] === true && itemId == 265)
	{
		addonShowAchievement(9);
	}
	if(achievement[10]["reached"] === true && itemId == 290)
	{
		addonShowAchievement(10);
	}
	if(achievement[11]["reached"] === true && itemId == 297)
	{
		addonShowAchievement(11);
	}
	if(achievement[12]["reached"] === true && itemId == 354)
	{
		addonShowAchievement(12);
	}
	if(achievement[13]["reached"] === true)
	{
		if (itemId == 274 || itemId == 257 || itemId == 285 || itemId == 278)
		{
			addonShowAchievement(13);
		}
	}
	if(achievement[14]["reached"] === true && itemId == 268)
	{
		addonShowAchievement(14);
	}
	if(achievement[15]["reached"] === true && itemId == 47)
	{
		addonShowAchievement(15);
	}
}
function attackHook(attacker, victim)
{
	if(achievement[1]["reached"] === true)
	{
		if(Entity.getEntityTypeId(victim) == 32 || Entity.getEntityTypeId(victim) == 33 || Entity.getEntityTypeId(victim) == 34 || Entity.getEntityTypeId(victim) == 35 || Entity.getEntityTypeId(victim) == 36)
		{
			addonShowAchievement(1);
		}
	}
	if(achievement[2]["reached"] === true && Entity.getEntityTypeId(victim) == 11)
	{
		addonShowAchievement(2);
	}
	if(achievement[3]["reached"] === true && Entity.getEntityTypeId(victim) == 34 && getCarriedItem() == 261)
	{
		addonShowAchievement(3);
	}
}
function procCmd(command)
{
	var cmd = command.toLowerCase().split(" ");
	switch(cmd[0])
	{
		case "ach":
		case "achievements":
		
			switch(cmd[1])
			{
				case "save":
				
					for(var i = 0; i < achievement.length; i++)
					{
						ModPE.saveData("a" + i, achievement[i]["reached"]);
					}
					addonColourMessage("Saved achievements!");
					break;
				
				case "load":
				
					for(var i = 0; i < achievement.length; i++)
					{
						achievement[i]["reached"] = ModPE.readData("a" + i);
					}
					addonColourMessage("Loaded achievements!");
					break;
				
				case "reset":
				
					for(var i = 0; i < achievement.length; i++)
					{
						achievement[i]["reached"] = false;
						ModPE.saveData("a" + i, achievement[i]);
					}
					addonColourMessage("Resetted achievements!");
					break;
				
				default:
				
					addonErrorMessage("Command " + p[1] + " does not exist!");
					break;
			}
		
		default:
		
			break;
	}
}
function destroyBlock(x, y, z, side)
{
	if (achievement[4]["reached"] === true && getTile(x, y, z) == 17)
	{
		addonShowAchievement(4);
	}
	if (achievement[5]["reached"] === true && getTile(x, y, z) == 56 && getCarriedItem() == 257)
	{
		addonShowAchievement(5);
	}
}
function newLevel()
{
	for(var i = 0; i < achievement.length; i++)
	{
		achievement[i]["reached"] = ModPE.readData("a" + i);
	}
	clientMessage(ChatColor.GRAY + "[INFO] " + ChatColor.WHITE + project + " loaded");
}
function leaveGame()
{
	for(var i = 0; i < achievement.length; i++)
	{
		ModPE.saveData("a" + i, achievement[i]["reached"]);
	}
}

// Additional functions
function addonColourMessage(string)
{
	clientMessage(ChatColor.GRAY + "["+ ChatColor.RED + sname + ChatColor.GRAY +"] " + ChatColor.WHITE + string);
}
function addonErrorMessage(string)
{
	clientMessage(ChatColor.GRAY + "["+ ChatColor.RED + sname + ChatColor.GRAY +"] " + ChatColor.RED + string);
}
function addonShowAchievement(achievementID)
{
	achievement[achievementID] = true;
	clientMessage("Achievement get! " + achievement[achievementID]["message"]);
}