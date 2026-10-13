const catalogMap = {
  // =================== CLOTHING (16 items, 32 images) ===================
  // 101: Saint Laurent Le Smoking Grain de Poudre Wool Tuxedo Blazer (Black, Jackets)
  "clothing_101_a": "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=800&q=80",
  "clothing_101_b": "https://images.pexels.com/photos/8485432/pexels-photo-8485432.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 102: Khaite The Abigail High-Rise Rigid Straight-Leg Jean (Blue, Pants)
  "clothing_102_a": "https://images.pexels.com/photos/4066290/pexels-photo-4066290.jpeg?auto=compress&cs=tinysrgb&w=800",
  "clothing_102_b": "https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 103: Bottega Veneta Belted Trench Coat in Technical Compact Cotton (Champagne, Outerwear)
  "clothing_103_a": "https://images.pexels.com/photos/14790509/pexels-photo-14790509.jpeg?auto=compress&cs=tinysrgb&w=800",
  "clothing_103_b": "https://images.pexels.com/photos/13973198/pexels-photo-13973198.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 104: Jacquemus La Chemise Bahia Draped Plunging Silk Blouse (Ivory, Tops)
  "clothing_104_a": "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?auto=format&fit=crop&w=800&q=80",
  "clothing_104_b": "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  // 105: Alaïa Architectural Flute Knit High-Waisted Midi Skirt (Black, Skirts)
  "clothing_105_a": "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
  "clothing_105_b": "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800&q=80",
  // 106: The Row Marcel Oversized Mongolian Cashmere Crewneck (Champagne, Knitwear)
  "clothing_106_a": "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
  "clothing_106_b": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80",
  // 107: Rick Owens Bauhaus Washed Calfskin Zip Biker Jacket (Black, Jackets)
  "clothing_107_a": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
  "clothing_107_b": "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=800&q=80",
  // 108: Mugler Optical Spiral Sheer Illusion Tulle Bodysuit (Black, Tops)
  "clothing_108_a": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  "clothing_108_b": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  // 109: Courrèges Vinyl Re-Edition Snap Button Cropped Jacket (Scarlet Red, Jackets)
  "clothing_109_a": "https://images.pexels.com/photos/7691041/pexels-photo-7691041.jpeg?auto=compress&cs=tinysrgb&w=800",
  "clothing_109_b": "https://images.pexels.com/photos/18951526/pexels-photo-18951526/free-photo-of-a-womans-blazer-on-a-mannequin.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 110: The Row Gala Fluid Wide-Leg Tailored Silk Crepe Trousers (Black, Pants)
  "clothing_110_a": "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",
  "clothing_110_b": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80",
  // 111: Khaite The Scarlet Heavy Gauge Cashmere Cardigan (Champagne, Knitwear)
  "clothing_111_a": "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=800&q=80",
  "clothing_111_b": "https://images.pexels.com/photos/9508862/pexels-photo-9508862.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 112: Balenciaga Hourglass Sculpted Shoulder Wool Flannel Blazer (Black, Jackets)
  "clothing_112_a": "https://images.pexels.com/photos/36203255/pexels-photo-36203255/free-photo-of-elegant-double-breasted-blazer-close-up.jpeg?auto=compress&cs=tinysrgb&w=800",
  "clothing_112_b": "https://images.pexels.com/photos/19133986/pexels-photo-19133986/free-photo-of-blazers-on-display-in-store.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 113: Bottega Veneta Supple Lambskin Straight-Leg Leather Trousers (Black, Pants)
  "clothing_113_a": "https://images.pexels.com/photos/37546081/pexels-photo-37546081/free-photo-of-fashionable-woman-posing-in-stylish-outfit.jpeg?auto=compress&cs=tinysrgb&w=800",
  "clothing_113_b": "https://images.pexels.com/photos/15049700/pexels-photo-15049700.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 114: Jacquemus Le Double Cardigan Brushed Mohair Cropped Knit (Olive Gold, Knitwear)
  "clothing_114_a": "https://images.pexels.com/photos/19192235/pexels-photo-19192235.jpeg?auto=compress&cs=tinysrgb&w=800",
  "clothing_114_b": "https://images.pexels.com/photos/20787600/pexels-photo-20787600.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 115: Saint Laurent Sheer Silk-Chiffon Lavallière Tie-Neck Blouse (Black, Tops)
  "clothing_115_a": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
  "clothing_115_b": "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
  // 116: Givenchy Shark Lock Grain de Gabardine Tailored Wool Coat (Black, Outerwear)
  "clothing_116_a": "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80",
  "clothing_116_b": "https://images.pexels.com/photos/30916976/pexels-photo-30916976/free-photo-of-fashionable-man-in-pinstripe-suit-among-clothing-racks.jpeg?auto=compress&cs=tinysrgb&w=800",

  // =================== SHOES (16 items, 32 images) ===================
  // 201: Amina Muaddi Begum Glass Transparent PVC Crystal Slingback 95mm (Ivory, Heels)
  "shoes_201_a": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
  "shoes_201_b": "https://images.unsplash.com/photo-1551489186-ccb95a1ea6a3?auto=format&fit=crop&w=800&q=80",
  // 202: Saint Laurent Blade Pointed Square-Toe Patent Leather Slingback (Black, Heels)
  "shoes_202_a": "https://images.pexels.com/photos/10070653/pexels-photo-10070653.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_202_b": "https://images.pexels.com/photos/5713310/pexels-photo-5713310.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 203: Bottega Veneta Atomic Stretch Lambskin Leather Over-The-Knee Boots (Black, Boots)
  "shoes_203_a": "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?auto=format&fit=crop&w=800&q=80",
  "shoes_203_b": "https://images.pexels.com/photos/27174564/pexels-photo-27174564.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 204: The Row Bare Minimalist Strappy Leather Kitten Heel Sandal (Scarlet Red, Sandals)
  "shoes_204_a": "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",
  "shoes_204_b": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80",
  // 205: Maison Margiela Tabi Split-Toe Vintage Treatment Leather Ankle Boots (Black, Boots)
  "shoes_205_a": "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?auto=format&fit=crop&w=800&q=80",
  "shoes_205_b": "https://images.pexels.com/photos/27256456/pexels-photo-27256456.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 206: Manolo Blahnik Hangisi 105 Jewel Buckle Silk Satin Evening Pump (Emerald, Heels)
  "shoes_206_a": "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
  "shoes_206_b": "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
  // 207: Alaïa Cabaret Leather Platform Curved Wedge Mules (Black, Mules)
  "shoes_207_a": "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=800&q=80",
  "shoes_207_b": "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80",
  // 208: Jacquemus Les Doubles Sandales Asymmetric Strap Kitten Heel (Champagne, Sandals)
  "shoes_208_a": "https://images.pexels.com/photos/4376757/pexels-photo-4376757.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_208_b": "https://images.pexels.com/photos/9267585/pexels-photo-9267585.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 209: The Row Fisherman Hand-Woven Nappa Leather Cage Flat (Ivory, Flats)
  "shoes_209_a": "https://images.pexels.com/photos/14816287/pexels-photo-14816287.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_209_b": "https://images.pexels.com/photos/27617195/pexels-photo-27617195.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 210: Bottega Veneta Lug Heavy Tread Elasticated Chelsea Ankle Boots (Black, Boots)
  "shoes_210_a": "https://images.pexels.com/photos/27141850/pexels-photo-27141850.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_210_b": "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80",
  // 211: Miu Miu Satin Crystal Buckle Strap Ballerina Flats (Champagne, Flats)
  "shoes_211_a": "https://images.pexels.com/photos/34294446/pexels-photo-34294446.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_211_b": "https://images.pexels.com/photos/36581188/pexels-photo-36581188.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 212: Amina Muaddi Lupita Glass Holographic Wedge Mules 95mm (Emerald, Mules)
  "shoes_212_a": "https://images.pexels.com/photos/36212466/pexels-photo-36212466.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_212_b": "https://images.pexels.com/photos/13862209/pexels-photo-13862209.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 213: Saint Laurent Tribute 105 Platform Woven Leather Stiletto Sandal (Black, Sandals)
  "shoes_213_a": "https://images.pexels.com/photos/31502438/pexels-photo-31502438.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_213_b": "https://images.unsplash.com/photo-1780327011415-7496f9d66da9?auto=format&fit=crop&w=800&q=80",
  // 214: Maison Margiela Tabi Soft Calfskin Split-Toe Ballerina Flats (Black, Flats)
  "shoes_214_a": "https://images.pexels.com/photos/29258015/pexels-photo-29258015.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_214_b": "https://images.pexels.com/photos/23692992/pexels-photo-23692992.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 215: Balenciaga Cagole 90mm Studded Arena Leather Mules (Black, Mules)
  "shoes_215_a": "https://images.pexels.com/photos/36674977/pexels-photo-36674977.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_215_b": "https://images.unsplash.com/photo-1522315109300-78ce09fe6d37?auto=format&fit=crop&w=800&q=80",
  // 216: Prada Monolith Brushed Spazzolato Leather Platform Loafers (Black, Flats)
  "shoes_216_a": "https://images.pexels.com/photos/35070982/pexels-photo-35070982.jpeg?auto=compress&cs=tinysrgb&w=800",
  "shoes_216_b": "https://images.pexels.com/photos/36053889/pexels-photo-36053889.jpeg?auto=compress&cs=tinysrgb&w=800",

  // =================== BAGS (16 items, 32 images) ===================
  // 301: Bottega Veneta Small Andiamo Intrecciato Leather Top-Handle Bag (Ivory, Totes)
  "bags_301_a": "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  "bags_301_b": "https://images.pexels.com/photos/5352628/pexels-photo-5352628.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 302: Saint Laurent Le 5 à 7 Smooth Calfskin Leather Hobo Shoulder Bag (Black, Shoulder)
  "bags_302_a": "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80",
  "bags_302_b": "https://images.pexels.com/photos/7735446/pexels-photo-7735446.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 303: Balenciaga Le Cagole XS Arena Lambskin Shoulder Bag with Mirror (Black, Shoulder)
  "bags_303_a": "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80",
  "bags_303_b": "https://images.pexels.com/photos/27204287/pexels-photo-27204287.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 304: Loewe Puzzle Edge Classic Handcrafted Small Crossbody Bag (Champagne, Crossbody)
  "bags_304_a": "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80",
  "bags_304_b": "https://images.pexels.com/photos/5243552/pexels-photo-5243552.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 305: Jacquemus Le Chiquito Moyen Leather Top-Handle Mini Bag (Olive Gold, Mini)
  "bags_305_a": "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80",
  "bags_305_b": "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 306: Khaite The Lotus Sculptural Suede Leather Medium Tote (Champagne, Totes)
  "bags_306_a": "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800&q=80",
  "bags_306_b": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
  // 307: Alaïa Le Coeur Sculpted Heart Leather Shoulder Bag (Scarlet Red, Mini)
  "bags_307_a": "https://images.unsplash.com/photo-1575032617751-6ddec2089882?auto=format&fit=crop&w=800&q=80",
  "bags_307_b": "https://images.pexels.com/photos/7953286/pexels-photo-7953286.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 308: Bottega Veneta Mini Jodie Knotted Handle Intrecciato Leather Hobo (Black, Clutches)
  "bags_308_a": "https://images.pexels.com/photos/36365228/pexels-photo-36365228.jpeg?auto=compress&cs=tinysrgb&w=800",
  "bags_308_b": "https://images.pexels.com/photos/22434764/pexels-photo-22434764.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 309: Saint Laurent Icare Maxi Quilted Lambskin Chain Shopping Tote (Black, Totes)
  "bags_309_a": "https://images.pexels.com/photos/6650001/pexels-photo-6650001.jpeg?auto=compress&cs=tinysrgb&w=800",
  "bags_309_b": "https://images.pexels.com/photos/9800706/pexels-photo-9800706.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 310: The Row Margaux 15 Smooth Saddle Leather Top-Handle Bag (Champagne, Totes)
  "bags_310_a": "https://images.pexels.com/photos/32498584/pexels-photo-32498584.jpeg?auto=compress&cs=tinysrgb&w=800",
  "bags_310_b": "https://images.pexels.com/photos/6633602/pexels-photo-6633602.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 311: Jacquemus Le Bambino Structured Long Leather Shoulder Bag (Ivory, Shoulder)
  "bags_311_a": "https://images.pexels.com/photos/5524417/pexels-photo-5524417.jpeg?auto=compress&cs=tinysrgb&w=800",
  "bags_311_b": "https://images.pexels.com/photos/6070056/pexels-photo-6070056.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 312: Bottega Veneta Padded Cassette Intrecciato Leather Crossbody (Emerald, Crossbody)
  "bags_312_a": "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
  "bags_312_b": "https://images.pexels.com/photos/28387111/pexels-photo-28387111.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 313: Loewe Flamenco Knotted Drawstring Soft Nappa Clutch Bag (Scarlet Red, Clutches)
  "bags_313_a": "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
  "bags_313_b": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
  // 314: Balenciaga Hourglass Small Shiny Box Calfskin Handbag (Black, Shoulder)
  "bags_314_a": "https://images.unsplash.com/photo-1623123627523-edd3cc6d13bb?auto=format&fit=crop&w=800&q=80",
  "bags_314_b": "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?auto=format&fit=crop&w=800&q=80",
  // 315: Prada Cleo Brushed Spazzolato Leather Flap Shoulder Bag (Black, Shoulder)
  "bags_315_a": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
  "bags_315_b": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  // 316: Alaïa Mina 20 Laser-Cut Vienne Calfskin Leather Tote (Ivory, Totes)
  "bags_316_a": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  "bags_316_b": "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=800",

  // =================== ACCESSORIES (16 items, 32 images) ===================
  // 401: Saint Laurent SL 557 Shade Bold Oval Acetate Sunglasses (Black, Eyewear)
  "accessories_401_a": "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
  "accessories_401_b": "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
  // 402: Bottega Veneta Knot Buckle Polished Calfskin Leather Belt (Black, Belts)
  "accessories_402_a": "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=80",
  "accessories_402_b": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
  // 403: Vivienne Westwood Bas Relief Pearl Drop Choker Necklace (Ivory, Jewelry)
  "accessories_403_a": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
  "accessories_403_b": "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 404: Jacquemus Le Bob Artichaut Fringed Canvas Bucket Hat (Ivory, Hats)
  "accessories_404_a": "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
  "accessories_404_b": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800&q=80",
  // 405: Khaite The Bambi Double-Wrap Italian Leather Waist Belt (Black, Belts)
  "accessories_405_a": "https://images.pexels.com/photos/32677246/pexels-photo-32677246/free-photo-of-sleek-black-sunglasses-with-leather-case.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_405_b": "https://images.pexels.com/photos/5202048/pexels-photo-5202048.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 406: Alaïa Sculpted Molten Brass Spiral Cuff Bracelet (Champagne, Jewelry)
  "accessories_406_a": "https://images.pexels.com/photos/13155693/pexels-photo-13155693.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_406_b": "https://images.pexels.com/photos/29043373/pexels-photo-29043373/free-photo-of-elegant-gold-jewelry-display-in-store.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 407: Loewe Anagram Inlaid Palladium & Gold-Tone Brooch (Champagne, Jewelry)
  "accessories_407_a": "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
  "accessories_407_b": "https://images.pexels.com/photos/35933227/pexels-photo-35933227/free-photo-of-elegant-gold-jewelry-set-on-minimalist-background.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 408: Saint Laurent Chunky Geometric Gilded Brass Clip Earrings (Champagne, Jewelry)
  "accessories_408_a": "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
  "accessories_408_b": "https://images.pexels.com/photos/36772546/pexels-photo-36772546/free-photo-of-elegant-close-up-of-pink-earrings-on-woman-s-ear.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 409: Bottega Veneta Small Drop Earrings in 18K Yellow Gold Over Silver (Champagne, Jewelry)
  "accessories_409_a": "https://images.pexels.com/photos/7514818/pexels-photo-7514818.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_409_b": "https://images.pexels.com/photos/38180246/pexels-photo-38180246/free-photo-of-colorful-assortment-of-fashion-earrings-displayed.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 410: Celine Triomphe 01 Oval Acetate Frame Sunglasses (Black, Eyewear)
  "accessories_410_a": "https://images.pexels.com/photos/12486667/pexels-photo-12486667.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_410_b": "https://images.pexels.com/photos/6924156/pexels-photo-6924156.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 411: The Row Classic Fringed Cashmere & Mulberry Silk Scarf (Champagne, Hats)
  "accessories_411_a": "https://images.pexels.com/photos/28953737/pexels-photo-28953737/free-photo-of-elegant-woman-in-fashionable-sunglasses-and-hat.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_411_b": "https://images.pexels.com/photos/5567211/pexels-photo-5567211.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 412: Saint Laurent Cassandre Thin Reversible Leather Belt with YSL Loop (Black, Belts)
  "accessories_412_a": "https://images.pexels.com/photos/31959214/pexels-photo-31959214.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_412_b": "https://images.pexels.com/photos/31959215/pexels-photo-31959215.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 413: Jacquemus Le Porte-Clés Chiquito Miniature Leather Charm (Olive Gold, Jewelry)
  "accessories_413_a": "https://images.pexels.com/photos/37383648/pexels-photo-37383648/free-photo-of-handcrafted-leather-keychains-displayed-on-fabric.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_413_b": "https://images.pexels.com/photos/12444591/pexels-photo-12444591.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 414: Balenciaga BB Monogram Wrap-Around Shield Sunglasses (Black, Eyewear)
  "accessories_414_a": "https://images.pexels.com/photos/2876798/pexels-photo-2876798.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_414_b": "https://images.pexels.com/photos/33465963/pexels-photo-33465963/free-photo-of-confident-woman-with-sunglasses-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 415: Prada Re-Nylon Enameled Triangle Logo Bucket Hat (Black, Hats)
  "accessories_415_a": "https://images.pexels.com/photos/6069764/pexels-photo-6069764.jpeg?auto=compress&cs=tinysrgb&w=800",
  "accessories_415_b": "https://images.pexels.com/photos/6047683/pexels-photo-6047683.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 416: Tom Ford Soleil Lip & Private Blend Fragrance Luxury Vault (Ivory, Jewelry)
  "accessories_416_a": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  "accessories_416_b": "https://images.pexels.com/photos/34051691/pexels-photo-34051691/free-photo-of-elegant-diamond-cut-perfume-bottles-display.jpeg?auto=compress&cs=tinysrgb&w=800",

  // =================== DRESSES (16 items, 32 images) ===================
  // 1: Jacquemus La Robe Saudade Draped Asymmetric Gown (Ivory, Maxi)
  "dresses_1_a": "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
  "dresses_1_b": "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=800&q=80",
  // 2: Khaite The Danielle Off-Shoulder Matte Ribbed Knit Midi (Black, Midi)
  "dresses_2_a": "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",
  "dresses_2_b": "https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 3: Saint Laurent Hooded Halter Silk-Georgette Column Gown (Emerald, Maxi)
  "dresses_3_a": "https://images.pexels.com/photos/1655841/pexels-photo-1655841.jpeg?auto=compress&cs=tinysrgb&w=800",
  "dresses_3_b": "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80",
  // 4: Norma Kamali Diana One-Shoulder Shirred Bodysuit Gown (Scarlet Red, Maxi)
  "dresses_4_a": "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
  "dresses_4_b": "https://images.pexels.com/photos/36707016/pexels-photo-36707016.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 5: Coperni Tailored Cut-Out Ring Detail Wool Mini Dress (Black, Mini)
  "dresses_5_a": "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80",
  "dresses_5_b": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
  // 6: Rick Owens Lido Liquid Metallic Draped Column Gown (Champagne, Maxi)
  "dresses_6_a": "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",
  "dresses_6_b": "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80",
  // 7: Mugler Illusion Spiral Mesh Inserted Sculpt Midi Dress (Black, Midi)
  "dresses_7_a": "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800",
  "dresses_7_b": "https://images.pexels.com/photos/18413155/pexels-photo-18413155.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 8: Alaïa Archetype Sculpted Skater Mini in Crinoline Knit (Ivory, Mini)
  "dresses_8_a": "https://images.pexels.com/photos/14801160/pexels-photo-14801160.jpeg?auto=compress&cs=tinysrgb&w=800",
  "dresses_8_b": "https://images.pexels.com/photos/7167439/pexels-photo-7167439.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 9: Zimmermann Natura Floral Appliqué Linen-Silk Organza Midi (Blush Pink, Midi)
  "dresses_9_a": "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
  "dresses_9_b": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  // 10: Bottega Veneta Leather Accented Scoop Neck Compact Wool Gown (Black, Maxi)
  "dresses_10_a": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
  "dresses_10_b": "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
  // 11: Christopher Esber Deconstruct Stone-Detail Ruched Silk Maxi Dress (Olive Gold, Maxi)
  "dresses_11_a": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
  "dresses_11_b": "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80",
  // 12: Magda Butrym Corseted 3D Silk Flower Sweetheart Mini Dress (Scarlet Red, Mini)
  "dresses_12_a": "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80",
  "dresses_12_b": "https://images.pexels.com/photos/18081014/pexels-photo-18081014.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 13: Khaite The Lotus Draped Silk-Charmeuse Slip Maxi (Champagne, Maxi)
  "dresses_13_a": "https://images.pexels.com/photos/13301470/pexels-photo-13301470.jpeg?auto=compress&cs=tinysrgb&w=800",
  "dresses_13_b": "https://images.pexels.com/photos/5637456/pexels-photo-5637456.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 14: Jacquemus La Robe Sierra Halter Neck Strap Detail Mini (Black, Mini)
  "dresses_14_a": "https://images.pexels.com/photos/28232246/pexels-photo-28232246/free-photo-of-a-woman-in-a-red-dress-posing-on-a-railing.jpeg?auto=compress&cs=tinysrgb&w=800",
  "dresses_14_b": "https://images.pexels.com/photos/34921744/pexels-photo-34921744.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 15: Norma Kamali Slinky Turtleneck High-Slit Column Midi Dress (Black, Midi)
  "dresses_15_a": "https://images.pexels.com/photos/3394229/pexels-photo-3394229.jpeg?auto=compress&cs=tinysrgb&w=800",
  "dresses_15_b": "https://images.pexels.com/photos/19784650/pexels-photo-19784650.jpeg?auto=compress&cs=tinysrgb&w=800",
  // 16: Saint Laurent Plunging Sweetheart Velvet Evening Cocktail Mini (Black, Mini)
  "dresses_16_a": "https://images.pexels.com/photos/13870499/pexels-photo-13870499.jpeg?auto=compress&cs=tinysrgb&w=800",
  "dresses_16_b": "https://images.pexels.com/photos/31959216/pexels-photo-31959216.jpeg?auto=compress&cs=tinysrgb&w=800"
};

module.exports = { catalogMap };

