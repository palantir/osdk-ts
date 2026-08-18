import{j as i}from"./iframe-YbZJ4Q2T.js";import{O as p}from"./object-table-BW3KB80g.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bk2lOR8K.js";import"./preload-helper-nrcicwIZ.js";import"./Table-D2BU-uGD.js";import"./index-BbeJO0tu.js";import"./Dialog-BMPFF_lX.js";import"./cross-Chqx1Vmd.js";import"./svgIconContainer-CvzqHx8a.js";import"./useBaseUiId-DTGQIw9V.js";import"./InternalBackdrop-UwFwjs-I.js";import"./composite-D3JFLD7k.js";import"./index-CjgLq_Ze.js";import"./index-BArD5hnh.js";import"./index-DaB6Rdj2.js";import"./useEventCallback-Cu0cHPi1.js";import"./SkeletonBar-DIcbo8Ai.js";import"./LoadingCell-qy913ZRO.js";import"./ColumnConfigDialog-DrnL98R1.js";import"./DraggableList-DPV2iFvD.js";import"./search-c-d9DWXs.js";import"./Input-DuCwdPfX.js";import"./useControlled-DLIRtZT-.js";import"./Button-Drmtw-7h.js";import"./small-cross-BaOf2IHH.js";import"./ActionButton-D4JZZuM3.js";import"./Checkbox-BEvItd_I.js";import"./useValueChanged-BXsv3vOm.js";import"./CollapsiblePanel-CB2lFGLk.js";import"./MultiColumnSortDialog-JI3aZi8H.js";import"./MenuTrigger-DnswiPxP.js";import"./CompositeItem-DJS21xnC.js";import"./ToolbarRootContext-hKDDy8Tn.js";import"./getDisabledMountTransitionStyles-BtCYo8Vw.js";import"./getPseudoElementBounds-Jh0Tlk_E.js";import"./chevron-down-DV-3X39-.js";import"./index-Dj7Gzmji.js";import"./error-BpN2G5nD.js";import"./BaseCbacBanner-gQ71dViq.js";import"./makeExternalStore-D3Nkh70z.js";import"./Tooltip-Bxo3fb0L.js";import"./PopoverPopup-C8jr-6dr.js";import"./debounce-qGwGM8IN.js";import"./useOsdkClient-BJz82Q8V.js";import"./tick-yYczsGE5.js";import"./DropdownField-DjUqQXA4.js";import"./isEqual-B7FXvL0y.js";import"./withOsdkMetrics-DAKfNXNY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
