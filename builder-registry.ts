import { Builder } from "@builder.io/react";
import NavBar from "@/components/sections/NavBar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import HowWeHelp from "@/components/sections/HowWeHelp";
import MissionBanner from "@/components/sections/MissionBanner";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

Builder.registerComponent(NavBar, {
  name: "NavBar",
  inputs: [
    { name: "links", type: "list", subFields: [{ name: "label", type: "string" }] },
    { name: "cta",   type: "string", defaultValue: "Get Ahead Now" },
  ],
});

Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    { name: "image",   type: "file", allowedFileTypes: ["jpeg", "jpg", "png", "webp"] },
    { name: "logo",    type: "file", allowedFileTypes: ["svg", "png"] },
    { name: "title",   type: "string" },
    { name: "subLight",type: "string" },
    { name: "subBold", type: "string" },
    { name: "cta",     type: "string", defaultValue: "Get Ahead Now" },
    { name: "ctaHref", type: "string", defaultValue: "#cta" },
  ],
});

Builder.registerComponent(Features, {
  name: "Features",
  inputs: [
    { name: "items", type: "list", subFields: [
      { name: "icon",  type: "file" },
      { name: "title", type: "string" },
      { name: "body",  type: "longText" },
    ]},
    { name: "image", type: "file" },
  ],
});

Builder.registerComponent(HowItWorks, {
  name: "HowItWorks",
  inputs: [
    { name: "title",    type: "string", defaultValue: "How It Works" },
    { name: "subtitle", type: "longText" },
    { name: "steps",    type: "list", subFields: [
      { name: "title", type: "string" },
      { name: "body",  type: "longText" },
      { name: "image", type: "file" },
      { name: "extra", type: "file", helperText: "Optional second image (e.g. the stick below the Record phone)" },
    ]},
  ],
});

Builder.registerComponent(HowWeHelp, {
  name: "HowWeHelp",
  inputs: [
    { name: "title",    type: "string", defaultValue: "How We Help" },
    { name: "subtitle", type: "longText" },
    { name: "image",    type: "file", helperText: "Combined 3-phone image (help.png)" },
    { name: "testimonial", type: "object", subFields: [
      { name: "avatar", type: "file" },
      { name: "name",   type: "string" },
      { name: "quote",  type: "longText" },
    ]},
  ],
});

Builder.registerComponent(MissionBanner, {
  name: "MissionBanner",
  inputs: [
    { name: "text",    type: "longText" },
    { name: "cta",     type: "string", defaultValue: "Our Team" },
    { name: "ctaHref", type: "string", defaultValue: "#team" },
  ],
});

Builder.registerComponent(FAQ, {
  name: "FAQ",
  inputs: [
    { name: "title", type: "string", defaultValue: "FAQ" },
    { name: "items", type: "list", subFields: [{ name: "question", type: "string" }] },
  ],
});

Builder.registerComponent(Footer, {
  name: "Footer",
  inputs: [
    { name: "logo",  type: "file" },
    { name: "store", type: "object", subFields: [
      { name: "img", type: "file" },
      { name: "alt", type: "string" },
    ]},
    { name: "columns", type: "list", subFields: [
      { name: "title", type: "string" },
      { name: "links", type: "list", subFields: [{ name: "label", type: "string" }] },
    ]},
    { name: "contact", type: "object", subFields: [
      { name: "email",        type: "string" },
      { name: "addressLines", type: "list", subFields: [{ name: "line", type: "string" }] },
      { name: "copyright",    type: "string" },
    ]},
    { name: "legal", type: "list", subFields: [{ name: "label", type: "string" }] },
  ],
});
