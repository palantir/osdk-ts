import{j as i}from"./iframe-CRdHGtB4.js";import{O as p}from"./object-table-DTlTylXj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-uK_P2ajM.js";import"./preload-helper-BEvuQzxo.js";import"./Table-D8dtRwAf.js";import"./index-C2_3h1_n.js";import"./Dialog-5CvDwi8E.js";import"./cross-DLEBSi7m.js";import"./svgIconContainer-DTW3-j-b.js";import"./useBaseUiId-B9FhtsvG.js";import"./InternalBackdrop-DsyRujLd.js";import"./composite-CXxADE8V.js";import"./index-Di6l4zyi.js";import"./index-BOTRrmgQ.js";import"./index-CY7WeKug.js";import"./useEventCallback-7xCONfWT.js";import"./SkeletonBar-DGWiWVdE.js";import"./LoadingCell-DGNEKdLa.js";import"./ColumnConfigDialog-YhRHMt5j.js";import"./DraggableList-Cr0znASn.js";import"./search-D2VDLMat.js";import"./Input-B6Z_q_CX.js";import"./useControlled-C8hCGxVV.js";import"./Button-CGHFm1Mj.js";import"./small-cross-7ZSwMv5y.js";import"./ActionButton-DpDG7H8z.js";import"./Checkbox-5yGmAk-K.js";import"./useValueChanged-BG_mNAGq.js";import"./CollapsiblePanel-Ldvssuk8.js";import"./MultiColumnSortDialog-CEXVRfRS.js";import"./MenuTrigger-CEno5xcX.js";import"./CompositeItem-C0iz3cc9.js";import"./ToolbarRootContext-DLgn0q4p.js";import"./getDisabledMountTransitionStyles-CnxtgABm.js";import"./getPseudoElementBounds-Cqtm6ufD.js";import"./chevron-down-kpc9MZer.js";import"./index-BQoPBT-L.js";import"./error-04dUIx8L.js";import"./BaseCbacBanner-CfZT1fiN.js";import"./makeExternalStore-BCdf-sYW.js";import"./Tooltip-BMhmull_.js";import"./PopoverPopup-UFvPBeiT.js";import"./debounce-DQn6ddo9.js";import"./useOsdkClient-98BDEE3v.js";import"./tick-BWmOq10B.js";import"./DropdownField-BEdm74vx.js";import"./isEqual-CIG29_z0.js";import"./withOsdkMetrics-CxeMS1SD.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
