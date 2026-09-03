import{j as i}from"./iframe-C-b6oTOJ.js";import{O as p}from"./object-table-C7DYq2pz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Chwrhjkw.js";import"./preload-helper-BeH59gqJ.js";import"./Table-DXsAkxSJ.js";import"./index-DE1s0YYF.js";import"./Dialog-qxM0X4dG.js";import"./cross-CHQB6uFl.js";import"./svgIconContainer-OHRV30Tv.js";import"./useBaseUiId-CkMODpS3.js";import"./InternalBackdrop-D6TYY50X.js";import"./composite-4UqYDIuK.js";import"./index-0ZNUZbhg.js";import"./index-BVjVMQ97.js";import"./index-B6prnO72.js";import"./useEventCallback-f02sUdqz.js";import"./SkeletonBar-CdIYyEwK.js";import"./LoadingCell-9RZsGqIp.js";import"./ColumnConfigDialog-DcBf2JfV.js";import"./DraggableList-yP-jSfX4.js";import"./search-JVftW7k-.js";import"./Input-BSxN1vwO.js";import"./useControlled-g-pxj8O4.js";import"./Button-CV_yYG-R.js";import"./small-cross-D4a9Ho69.js";import"./ActionButton-lKHVmnzU.js";import"./Checkbox-Ci2Nd6sh.js";import"./useValueChanged-y611DxC1.js";import"./CollapsiblePanel-DFf461j6.js";import"./MultiColumnSortDialog-Bvmvw-Lo.js";import"./MenuTrigger-eYoztX0q.js";import"./CompositeItem-BEGPA2jt.js";import"./ToolbarRootContext-D9YuleTy.js";import"./getDisabledMountTransitionStyles-ByMCPo6h.js";import"./getPseudoElementBounds-YS_9JBeN.js";import"./chevron-down-D7cmGpd4.js";import"./index-D6jWMBsi.js";import"./error-ByhaKTr1.js";import"./BaseCbacBanner-IyPGWhps.js";import"./makeExternalStore-B_SxmnOK.js";import"./Tooltip-DHzhDEF7.js";import"./PopoverPopup-BNW8X69h.js";import"./debounce-CeZCgghX.js";import"./useOsdkClient-CHwnoSo5.js";import"./tick-C3AZ4-vL.js";import"./DropdownField-D6Tax7Nm.js";import"./isEqual-DUa_QRFr.js";import"./withOsdkMetrics-BrJ-pBLm.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
