import{j as i}from"./iframe-IE85mU0C.js";import{O as p}from"./object-table-VIQdSIiM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DC6Q5Eqs.js";import"./preload-helper-BOAVNMzj.js";import"./Table-BUUulN0Y.js";import"./index-Cb-uWra3.js";import"./Dialog-CZVPdwGB.js";import"./cross-B7J67M4-.js";import"./svgIconContainer-DstMKe-n.js";import"./useBaseUiId-ChrCSMbI.js";import"./InternalBackdrop-BJ4sp-TV.js";import"./composite-mlo2KNAb.js";import"./index-CBYXm5R5.js";import"./index-6Itdkxzy.js";import"./index-BsUZ9W2f.js";import"./useEventCallback-BDUXB78A.js";import"./SkeletonBar-DPNqEMQ-.js";import"./LoadingCell-d80XHTZ_.js";import"./ColumnConfigDialog-DMOAQiEJ.js";import"./DraggableList-CdhbZ45T.js";import"./search-OX4J1wJ3.js";import"./Input-BPNEbKHH.js";import"./useControlled-BXrD1fp6.js";import"./Button-B-X3VNkp.js";import"./small-cross-FEZjqabC.js";import"./ActionButton-Bmb7hpam.js";import"./Checkbox-DfUuehp8.js";import"./useValueChanged--7cQqyYE.js";import"./CollapsiblePanel-CbdW_t08.js";import"./MultiColumnSortDialog-DYFh7fse.js";import"./MenuTrigger-CfqEz4nM.js";import"./CompositeItem-DZQ4wuX3.js";import"./ToolbarRootContext-Bkab47o6.js";import"./getDisabledMountTransitionStyles-D2JDsEiR.js";import"./getPseudoElementBounds-CsgiHNji.js";import"./chevron-down-DF5Twgp3.js";import"./index-BNUcpvM4.js";import"./error-C3z-yM5U.js";import"./BaseCbacBanner-DCvcYvuq.js";import"./makeExternalStore-B2AoPMSj.js";import"./Tooltip-BwBdjepj.js";import"./PopoverPopup-DEA0O1h4.js";import"./debounce-DBEu6yXI.js";import"./useOsdkClient-C_Z8b3Qp.js";import"./tick-DXtXHPPs.js";import"./DropdownField-wEalnpiM.js";import"./isEqual-B5lM3oF_.js";import"./withOsdkMetrics-BRxVuFD2.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
