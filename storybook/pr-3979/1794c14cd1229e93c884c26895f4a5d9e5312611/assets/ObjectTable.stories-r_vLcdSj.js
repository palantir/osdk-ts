import{j as i}from"./iframe-g6xxvyIV.js";import{O as p}from"./object-table-BWyD-xVP.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-27ACc2HP.js";import"./preload-helper-VtRw9ZxB.js";import"./Table-CWYryIq-.js";import"./index-CswLMQ0k.js";import"./Dialog-gHaoBoVV.js";import"./cross-ClaRDnYq.js";import"./svgIconContainer-TEGni_EK.js";import"./useBaseUiId-DXMdH-da.js";import"./InternalBackdrop-B2kPN_TW.js";import"./composite-CidrPxyb.js";import"./index-B1T8sIVD.js";import"./index-Df1hA2tb.js";import"./index-BqNrJX4d.js";import"./useEventCallback-Q7tlTXVx.js";import"./SkeletonBar-CIK4W8nM.js";import"./LoadingCell-Cf0gPIJl.js";import"./ColumnConfigDialog-TZ-5NdgB.js";import"./DraggableList-TxpAQF2V.js";import"./search-CoUKVa3J.js";import"./Input-DvVClOUT.js";import"./useControlled-DBzkXlO9.js";import"./Button-BX2PLV5j.js";import"./small-cross-DuwCmfeY.js";import"./ActionButton-B6C4Psnv.js";import"./Checkbox-CVKZIi-z.js";import"./useValueChanged-DvWpAsov.js";import"./CollapsiblePanel-RFMs-0SV.js";import"./MultiColumnSortDialog-Dq269Ur2.js";import"./MenuTrigger-BOmmKr51.js";import"./CompositeItem-D8bzrW1A.js";import"./ToolbarRootContext-CnYeU0vp.js";import"./getDisabledMountTransitionStyles-AFQK8iPs.js";import"./getPseudoElementBounds-COVW9G6p.js";import"./chevron-down-CkRfYs8Z.js";import"./index-DuMOiw4h.js";import"./error-BGoiu4dF.js";import"./BaseCbacBanner-y5Sk3JyZ.js";import"./makeExternalStore-BrS-ebeG.js";import"./Tooltip-82FaG7gZ.js";import"./PopoverPopup-MFr_6M87.js";import"./debounce-D2Twfe4R.js";import"./useOsdkClient-DQW7wz7c.js";import"./tick-BcR7azTr.js";import"./DropdownField-B2rbjyzb.js";import"./isEqual-D1gQH29y.js";import"./withOsdkMetrics-CfHIwfTt.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
