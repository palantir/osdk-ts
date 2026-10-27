import{j as i}from"./iframe-BK92nj8O.js";import{O as p}from"./object-table-C_ms1YYM.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BzkIsA1Y.js";import"./preload-helper-BzvFWRwm.js";import"./Table-ybPM_z_s.js";import"./index-Cp-oegvQ.js";import"./Dialog-C5rrN2iU.js";import"./cross-CQouWOVo.js";import"./svgIconContainer-CUCnXzLA.js";import"./useBaseUiId-DJzLMsdJ.js";import"./InternalBackdrop-CXx_gZFt.js";import"./composite-CUOp8zR0.js";import"./index-CRvcO-Mq.js";import"./index-Vq2K6jMQ.js";import"./index-BOzml72P.js";import"./useEventCallback-DW2JMFk8.js";import"./SkeletonBar-CUN-Db9r.js";import"./LoadingCell-B25Xa0BU.js";import"./ColumnConfigDialog-Ceb4wjXo.js";import"./DraggableList-D1Tjvk-y.js";import"./search-Cx7lcCpX.js";import"./Input-R7iFBYJw.js";import"./useControlled-D4vgYWXW.js";import"./Button-CLd3GlZq.js";import"./small-cross-DGwpD6_s.js";import"./ActionButton-BkWRPx-v.js";import"./Checkbox-D0BoCwAX.js";import"./useValueChanged-DREFbt6f.js";import"./CollapsiblePanel-fv8SIwpm.js";import"./MultiColumnSortDialog-D3G2Cdgi.js";import"./MenuTrigger-oYqLCT26.js";import"./CompositeItem-BUqJx2UC.js";import"./ToolbarRootContext-DaxowF1A.js";import"./getDisabledMountTransitionStyles-Dx3aHikn.js";import"./getPseudoElementBounds-BOjBrs5G.js";import"./chevron-down-DFEA5aIq.js";import"./index-D33Byr__.js";import"./error-CpelSvOO.js";import"./BaseCbacBanner-B6Aq0ByB.js";import"./makeExternalStore-C6TfNWC7.js";import"./Tooltip-DraOFyZC.js";import"./PopoverPopup-mBT0X6Cq.js";import"./debounce-CcroCpX3.js";import"./useOsdkClient-CR-tfmoo.js";import"./tick-DePsAy0F.js";import"./DropdownField-CfACKZfD.js";import"./isEqual-EKhcscH8.js";import"./withOsdkMetrics-F47lPElZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
