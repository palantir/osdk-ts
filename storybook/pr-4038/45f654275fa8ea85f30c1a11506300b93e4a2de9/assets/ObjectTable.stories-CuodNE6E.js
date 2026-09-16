import{j as i}from"./iframe-CChix_Ju.js";import{O as p}from"./object-table-W3AwL5m5.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6gGJzUF.js";import"./preload-helper-DGn9W5qi.js";import"./Table-ClI-xhR1.js";import"./index-pvPqNL-H.js";import"./Dialog-C0wKlZ34.js";import"./cross-CUi9b35_.js";import"./svgIconContainer-BeYzdFE0.js";import"./useBaseUiId-4A8uRFRe.js";import"./InternalBackdrop-0GHCyljD.js";import"./composite-Ctdw8swW.js";import"./index-CHXlKmK_.js";import"./index-BdOozmQn.js";import"./index-DzZ5SHau.js";import"./useEventCallback-omUHy35f.js";import"./SkeletonBar-CyTCelnP.js";import"./LoadingCell-CikoTcWZ.js";import"./ColumnConfigDialog-DbwfwSdP.js";import"./DraggableList-Dn_ahx7T.js";import"./search-CX5b2IB4.js";import"./Input-BRtUQT1Y.js";import"./useControlled-CG8Zt7_4.js";import"./Button-BRITeuER.js";import"./small-cross-CocjBOU4.js";import"./ActionButton-BOCIBxLx.js";import"./Checkbox-C9LUYdAG.js";import"./useValueChanged-5TXMPTNO.js";import"./CollapsiblePanel-C6nKBTkT.js";import"./MultiColumnSortDialog-BGo8dzST.js";import"./MenuTrigger-DmLCLZNx.js";import"./CompositeItem-Dh0FwBF1.js";import"./ToolbarRootContext-4N77tOAl.js";import"./getDisabledMountTransitionStyles-Dqw8IpJe.js";import"./getPseudoElementBounds-BZu9KNVE.js";import"./chevron-down-DL0MqWR7.js";import"./index-Bmjlrc5X.js";import"./error-fDpd87S9.js";import"./BaseCbacBanner-b0DOB5bF.js";import"./makeExternalStore-Cw3jon-H.js";import"./Tooltip-D0QIy-LD.js";import"./PopoverPopup-ZgO3OX-R.js";import"./debounce-y_QKH6vw.js";import"./useOsdkClient-BuYYPMjl.js";import"./tick-BaB62fCb.js";import"./DropdownField-BHcpSdCb.js";import"./isEqual-CLIiWmbM.js";import"./withOsdkMetrics-DIof6Ugt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
