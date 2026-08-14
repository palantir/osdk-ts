import{j as i}from"./iframe-BS39yabj.js";import{O as p}from"./object-table-BG2HpV_Z.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DsqGB5Ee.js";import"./preload-helper-BlmF7poY.js";import"./Table-NR-u2LQJ.js";import"./index-azX0WN20.js";import"./Dialog-BdDEc9ZK.js";import"./cross-bmcz7kaq.js";import"./svgIconContainer-CNsteYTu.js";import"./useBaseUiId-D6zQUJH2.js";import"./InternalBackdrop-DdLVr0rp.js";import"./composite-CrL6ee8J.js";import"./index-DNFWNz_b.js";import"./index-DG4fpTh9.js";import"./index-PhutVXJ9.js";import"./useEventCallback-DbJ-5CM3.js";import"./SkeletonBar-D2_rdQx4.js";import"./LoadingCell-DLSxxkpW.js";import"./ColumnConfigDialog-BI7Wk6ld.js";import"./DraggableList-3XvF_fmY.js";import"./search-DAe8-jYH.js";import"./Input-D3GthuCR.js";import"./useControlled-BtFTec_4.js";import"./Button-iYAVh6AY.js";import"./small-cross-1NinHjR6.js";import"./ActionButton-pdu1jtw7.js";import"./Checkbox-BOw-3iNT.js";import"./useValueChanged-Cv2_6DC2.js";import"./CollapsiblePanel-BpV10IyX.js";import"./MultiColumnSortDialog-DF9I3qiO.js";import"./MenuTrigger-B-q30BGy.js";import"./CompositeItem-9rYzgPbG.js";import"./ToolbarRootContext-CI8IZR11.js";import"./getDisabledMountTransitionStyles-CAstZq8O.js";import"./getPseudoElementBounds-CWt6eGsw.js";import"./chevron-down-DlL6v6RD.js";import"./index-COrNsrGV.js";import"./error-BIF0zaRT.js";import"./BaseCbacBanner-0uknKwVN.js";import"./makeExternalStore-CRPXUjA_.js";import"./Tooltip-BrBmFfM2.js";import"./PopoverPopup-ByPglwJA.js";import"./debounce-BAByceoi.js";import"./useOsdkClient-BEiGHmPL.js";import"./tick-BLEDxvEm.js";import"./DropdownField--vh2Xda9.js";import"./isEqual-Dw_0jNQy.js";import"./withOsdkMetrics-D0DSfH2H.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
