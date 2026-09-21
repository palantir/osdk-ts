import{j as i}from"./iframe-CjpAd4U5.js";import{O as p}from"./object-table-B1N2YZGj.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BOGBNxCf.js";import"./preload-helper-BfNxESlv.js";import"./Table-B-2W-CJ2.js";import"./index-CFyMtNDf.js";import"./Dialog-BTEOwbFI.js";import"./cross-YCEgVYb5.js";import"./svgIconContainer-BfRjvWya.js";import"./useBaseUiId-DtGYbhuk.js";import"./InternalBackdrop-_y5D9f1C.js";import"./composite-CXKEjPEl.js";import"./index-CESQmif6.js";import"./index-BqxRrYRP.js";import"./index-6181skxy.js";import"./useEventCallback-CJNt2kD4.js";import"./SkeletonBar-C6jHBjWT.js";import"./LoadingCell-DsM74MbC.js";import"./ColumnConfigDialog-D16XIRUR.js";import"./DraggableList-T2ec2RNh.js";import"./search-CXQZDVwK.js";import"./Input-BMeqWiRY.js";import"./useControlled-DlmQuXZO.js";import"./Button-B8Qahzmt.js";import"./small-cross-D9G7qUei.js";import"./ActionButton-CpKjD_O3.js";import"./Checkbox-Bpk90P30.js";import"./useValueChanged-C6MnAZ9a.js";import"./CollapsiblePanel-DuW80WT3.js";import"./MultiColumnSortDialog-CW0LUVRi.js";import"./MenuTrigger-CCjqXcFD.js";import"./CompositeItem-M0I4N5Qo.js";import"./ToolbarRootContext-pZWEREev.js";import"./getDisabledMountTransitionStyles-DQtOlfYI.js";import"./getPseudoElementBounds-VcyCM6_5.js";import"./chevron-down-Dk_9PWbo.js";import"./index-D-J9KFgM.js";import"./error-DP0C5EXb.js";import"./BaseCbacBanner-Cu9DTugF.js";import"./makeExternalStore-m3vRiWo8.js";import"./Tooltip-BDKJdSJE.js";import"./PopoverPopup-D3nKiinq.js";import"./debounce-DcMhn9AR.js";import"./useOsdkClient-C1vhGPX1.js";import"./tick-Dy5_FPax.js";import"./DropdownField-DCYZRjtJ.js";import"./isEqual-CTh71RS_.js";import"./withOsdkMetrics-q9Wg1g7p.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
