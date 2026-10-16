import{j as i}from"./iframe-CaMctZhM.js";import{O as p}from"./object-table-Bvnt7Wyt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CBrszozX.js";import"./preload-helper-DNMYa0Vf.js";import"./Table-D8AkL9yz.js";import"./index-CtdxRtEM.js";import"./Dialog-BfM0QFxQ.js";import"./cross-BG3r1-a6.js";import"./svgIconContainer--PB46C3w.js";import"./useBaseUiId-DXXB_44i.js";import"./InternalBackdrop-Cl0aIOdV.js";import"./composite-hogSzUb-.js";import"./index-D9rKK3Jx.js";import"./index-ClymoC-g.js";import"./index-DZzpVNZd.js";import"./useEventCallback-Cp11P4CG.js";import"./SkeletonBar-BRGBX3xw.js";import"./LoadingCell-BuIVSGd7.js";import"./ColumnConfigDialog-B897TDFU.js";import"./DraggableList-BNCCZbEI.js";import"./search-jWF7X9or.js";import"./Input-BXSwuDSh.js";import"./useControlled-BPVVUVXR.js";import"./Button-BDNmY4BX.js";import"./small-cross-CCg3K2o4.js";import"./ActionButton-CubBHf-4.js";import"./Checkbox-Cmw9d5wR.js";import"./useValueChanged-gcwEr2UE.js";import"./CollapsiblePanel-C15Mx4Y2.js";import"./MultiColumnSortDialog-BqU8deem.js";import"./MenuTrigger-D5ES9GTN.js";import"./CompositeItem-DUaU3yqi.js";import"./ToolbarRootContext-NuzyP_Z2.js";import"./getDisabledMountTransitionStyles-Zsn1wRQz.js";import"./getPseudoElementBounds-BcOMbE_O.js";import"./chevron-down-BTzBC5n8.js";import"./index-BNjCIBi_.js";import"./error-Cuicm8UG.js";import"./BaseCbacBanner-g8NoEMM9.js";import"./makeExternalStore-BCTvNoj1.js";import"./Tooltip-DU6FxlSQ.js";import"./PopoverPopup-CqHYCBTd.js";import"./debounce-DSgq7d59.js";import"./useOsdkClient-aWMARsJj.js";import"./tick-CJ39txi1.js";import"./DropdownField-DKs0z5rG.js";import"./isEqual-C8fXJSQK.js";import"./withOsdkMetrics-DSeCvaBk.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
