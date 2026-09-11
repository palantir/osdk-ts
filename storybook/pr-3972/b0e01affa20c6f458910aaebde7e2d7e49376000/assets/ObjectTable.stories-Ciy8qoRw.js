import{j as i}from"./iframe-D5Tg4ktw.js";import{O as p}from"./object-table-B8JcGxgg.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dm2YwGPR.js";import"./preload-helper-BaIqC2Pe.js";import"./Table-BPcBSQFu.js";import"./index-BEbB4IUm.js";import"./Dialog-DPIr7_Mp.js";import"./cross-DzUcTLFz.js";import"./svgIconContainer-C3wCuOXB.js";import"./useBaseUiId-BdvoItIk.js";import"./InternalBackdrop-DLYljigh.js";import"./composite-B1gx-sbX.js";import"./index-CFXN4yab.js";import"./index-DJsS0_Xm.js";import"./index-FQYOWNbs.js";import"./useEventCallback-Cxq3Ypn0.js";import"./SkeletonBar-Bm6lIBmj.js";import"./LoadingCell-POsDiFEK.js";import"./ColumnConfigDialog-DWjunH2C.js";import"./DraggableList-BSfbMhFR.js";import"./search-DeZTwCkl.js";import"./Input-CN7F7SIp.js";import"./useControlled-DObGwXHJ.js";import"./Button-DiryTlNK.js";import"./small-cross-tZnJs89K.js";import"./ActionButton-DdsvASl6.js";import"./Checkbox-DmnTpUu_.js";import"./useValueChanged-Dyb99FcC.js";import"./CollapsiblePanel-BIjDDqj4.js";import"./MultiColumnSortDialog-CE-NHI4-.js";import"./MenuTrigger-CW7zfuCG.js";import"./CompositeItem-C5_2nepJ.js";import"./ToolbarRootContext-0E-Oi6aL.js";import"./getDisabledMountTransitionStyles-DiO2Bw4N.js";import"./getPseudoElementBounds-BprlNR5S.js";import"./chevron-down-C1ACHifJ.js";import"./index-Deb3KNPH.js";import"./error-B5UKi7xe.js";import"./BaseCbacBanner-CqZxD00T.js";import"./makeExternalStore-kA_iXT4K.js";import"./Tooltip-DFNv6I-3.js";import"./PopoverPopup-Cl3OtvIp.js";import"./debounce-EQoAU-g_.js";import"./useOsdkClient-uKmKN20Y.js";import"./tick-_KNLE2bn.js";import"./DropdownField-BsQqxD2N.js";import"./isEqual-B8sfvD_4.js";import"./withOsdkMetrics-C-Pgn628.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
