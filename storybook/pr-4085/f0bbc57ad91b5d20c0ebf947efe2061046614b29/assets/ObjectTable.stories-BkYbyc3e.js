import{j as i}from"./iframe-DUMXb5nI.js";import{O as p}from"./object-table-BDaQbe3w.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-ClSP_mm2.js";import"./preload-helper-BJwXp4Q-.js";import"./Table-DKTu2e5B.js";import"./index-BbwFJ-ta.js";import"./Dialog-dT22cMHq.js";import"./cross-D_uZDyQx.js";import"./svgIconContainer-sVTzBKmW.js";import"./useBaseUiId-_e14ZC1l.js";import"./InternalBackdrop-CJNWsu2d.js";import"./composite-D-SRMe6j.js";import"./index-CNSnRqug.js";import"./index-DYmqgljQ.js";import"./index-7zI_gih7.js";import"./useEventCallback-ChqFaUAL.js";import"./SkeletonBar-CSPA62mF.js";import"./LoadingCell-D2OEMclx.js";import"./ColumnConfigDialog-DzXCaLxv.js";import"./DraggableList-BWkG-iJ_.js";import"./search-TGSQVeh_.js";import"./Input-DiFVGF-l.js";import"./useControlled-BDe8NiPs.js";import"./Button-BgjvY2h6.js";import"./small-cross-DAi9ABlY.js";import"./ActionButton-DBuZkuqt.js";import"./Checkbox-CpSDYiLA.js";import"./useValueChanged-B3sHWLjz.js";import"./CollapsiblePanel-BGXgYcLe.js";import"./MultiColumnSortDialog-BMg6PxrU.js";import"./MenuTrigger-Dm8pjmIz.js";import"./CompositeItem-HBdNGEyu.js";import"./ToolbarRootContext-LKaZxJnb.js";import"./getDisabledMountTransitionStyles-C0sSy9Tx.js";import"./getPseudoElementBounds-C-fSL_7l.js";import"./chevron-down-C-ZMpNeB.js";import"./index-CwUqs_yy.js";import"./error-Cm3UeO8R.js";import"./BaseCbacBanner-CKZAQPTu.js";import"./makeExternalStore-BwFxLGns.js";import"./Tooltip-PrnQ8hCt.js";import"./PopoverPopup-DQegoE5S.js";import"./debounce-Ct13Tnzu.js";import"./useOsdkClient-Ce1WdpbO.js";import"./tick-CJMPUx9Y.js";import"./DropdownField-B_P7JzgN.js";import"./isEqual-25Tdwmwq.js";import"./withOsdkMetrics-pgg1h4tV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
