import{j as i}from"./iframe-CjguFHy4.js";import{O as p}from"./object-table-BtuqOo-1.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CEYhd8ao.js";import"./preload-helper-LDqCwxAd.js";import"./Table-_ZnYlHIw.js";import"./index-BB032sbZ.js";import"./Dialog-B9J_G6l0.js";import"./cross-D1aOBf9U.js";import"./svgIconContainer-BZwzEo8G.js";import"./useBaseUiId-CgMNdHCe.js";import"./InternalBackdrop-DizbYCRP.js";import"./composite-Dx3ugufv.js";import"./index-BIFsH4xl.js";import"./index-C0VOKt8s.js";import"./index--EMP8S_8.js";import"./useEventCallback-5iqVINQW.js";import"./SkeletonBar-DblXaHNi.js";import"./LoadingCell-mjEtb5oo.js";import"./ColumnConfigDialog-DJeUgPPb.js";import"./DraggableList-BiHAyTPo.js";import"./search-PZYHdBYN.js";import"./Input-DSfygnqR.js";import"./useControlled-CjqkuBBy.js";import"./isEqual-XSvwjyBd.js";import"./isObject-lWDz75CT.js";import"./Button-D0KOIrm4.js";import"./ActionButton-CFH3DEk_.js";import"./Checkbox-CjvWoFfH.js";import"./useValueChanged-b9wcCC3s.js";import"./CollapsiblePanel-D-JMcXqs.js";import"./MultiColumnSortDialog-BOja1Xix.js";import"./MenuTrigger-B84dkc4t.js";import"./CompositeItem-DupF21ys.js";import"./ToolbarRootContext-Cc_rTViK.js";import"./getDisabledMountTransitionStyles-CzI3UF-F.js";import"./getPseudoElementBounds-Ds9Y3NYO.js";import"./chevron-down-ZzrJRIAu.js";import"./index-3HrMLGVC.js";import"./error-C_FLUo1p.js";import"./BaseCbacBanner-CuPOOH0I.js";import"./makeExternalStore-DL1G6fQU.js";import"./Tooltip-HAHLZ6Nc.js";import"./PopoverPopup-n4w7Qhj9.js";import"./toNumber-CI_cbj49.js";import"./useOsdkClient-4R8IZiTA.js";import"./tick-qr3TS1uB.js";import"./DropdownField-34nprrOE.js";import"./withOsdkMetrics-fD7F6GVF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
