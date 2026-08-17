import{j as i}from"./iframe-hkjMetp8.js";import{O as p}from"./object-table-BRxCfB_0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DvpyCo_j.js";import"./preload-helper-BG3PwWgg.js";import"./Table-Dko8Upk3.js";import"./index-DGAVzjUG.js";import"./Dialog-BOBWfbkF.js";import"./cross-BtmO4_tP.js";import"./svgIconContainer-6MVX_yz2.js";import"./useBaseUiId-vPjg87EZ.js";import"./InternalBackdrop-nPd6HaQG.js";import"./composite-CH-gf1yj.js";import"./index-DekbtEE0.js";import"./index-Cdw40tlt.js";import"./index-CZwKy0_e.js";import"./useEventCallback-DrBTYvw2.js";import"./SkeletonBar-CiIjXZ8Z.js";import"./LoadingCell-fVbK0evv.js";import"./ColumnConfigDialog-Dck2Ojjg.js";import"./DraggableList--J9ne7rl.js";import"./search-CEBIaEbf.js";import"./Input-5tyvJsuV.js";import"./useControlled-BbG65MVX.js";import"./isEqual-DxFkj09B.js";import"./isObject-BQUFjSwU.js";import"./Button-Ca8Yrp0-.js";import"./ActionButton-B2oiBf7l.js";import"./Checkbox-CvNyspqG.js";import"./useValueChanged-pSSuPQN8.js";import"./CollapsiblePanel-Db6NbA8L.js";import"./MultiColumnSortDialog--efeFQie.js";import"./MenuTrigger-T7OTl7Yr.js";import"./CompositeItem-DF9NnpkL.js";import"./ToolbarRootContext-Dr07gjpJ.js";import"./getDisabledMountTransitionStyles-5QCsfeUs.js";import"./getPseudoElementBounds-wN4T0YrG.js";import"./chevron-down-C1qRhGfc.js";import"./index-D9iCbPpq.js";import"./error-BfCVgfZr.js";import"./BaseCbacBanner-DKZQG3ac.js";import"./makeExternalStore-BByL-sEm.js";import"./Tooltip-bjs24eg9.js";import"./PopoverPopup-CcVfATcq.js";import"./toNumber-BRsGC7Sk.js";import"./useOsdkClient-BwTex2Oc.js";import"./tick-D4T1Ni-K.js";import"./DropdownField-Bo90G8ai.js";import"./withOsdkMetrics-BAFcUBo2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
