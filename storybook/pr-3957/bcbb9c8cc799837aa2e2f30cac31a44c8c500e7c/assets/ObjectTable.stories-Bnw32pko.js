import{j as i}from"./iframe-TApi_89H.js";import{O as p}from"./object-table-BTQFoSvM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B9-jQ3yY.js";import"./preload-helper-sYHE9xkK.js";import"./Table-D3kE7lwv.js";import"./index-C7k_RZGy.js";import"./Dialog-Bg4zyYCG.js";import"./cross-fnS0M6qm.js";import"./svgIconContainer-C7DRNdJN.js";import"./useBaseUiId-D7C__S_-.js";import"./InternalBackdrop-BhQtLhn1.js";import"./composite-DCCTyU-Y.js";import"./index-XwwRSRPj.js";import"./index-ZB-gWh6L.js";import"./index-Dn2TvP5W.js";import"./useEventCallback-KgfsELs8.js";import"./SkeletonBar-D2swFyMU.js";import"./LoadingCell-cXm-n914.js";import"./ColumnConfigDialog-rbXzBjOW.js";import"./DraggableList-mr8Dcpod.js";import"./search-COp09I1s.js";import"./Input-BvP2l_mS.js";import"./useControlled-CD3Nk51s.js";import"./Button-5wphI9oR.js";import"./small-cross-DXF_ebkC.js";import"./ActionButton-BmfN5KEN.js";import"./Checkbox-Dg_-6R30.js";import"./useValueChanged-CNTNGm5z.js";import"./CollapsiblePanel-CaSK4355.js";import"./MultiColumnSortDialog-WFw7Y8Dr.js";import"./MenuTrigger-lHb-ZApG.js";import"./CompositeItem-DWMayDud.js";import"./ToolbarRootContext-CXJo9eGs.js";import"./getDisabledMountTransitionStyles-BmIh8Y3H.js";import"./getPseudoElementBounds-C6viFtxP.js";import"./chevron-down-Bn6U06zL.js";import"./index-s3cuk91h.js";import"./error-BnvoNHjd.js";import"./BaseCbacBanner-DkqqNNoR.js";import"./makeExternalStore-DBGeSdOF.js";import"./Tooltip-CwOwKjZa.js";import"./PopoverPopup-gXjRdvfp.js";import"./debounce-DSR4xN0n.js";import"./useOsdkClient-C1l1n529.js";import"./tick-BWPgjUrc.js";import"./DropdownField-4rIfCihF.js";import"./isEqual-DE5Efej-.js";import"./withOsdkMetrics-B-5Iqtjd.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
