import{j as i}from"./iframe-BF6_9Xjc.js";import{O as p}from"./object-table-Kgjg2E3o.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-tVFmOqM-.js";import"./preload-helper-CVsiSqQ7.js";import"./Table-CZHycnjt.js";import"./index-B1Ya2fBr.js";import"./Dialog-KSu_uhqQ.js";import"./cross-_UU9sZ5F.js";import"./svgIconContainer-CQE4WPFB.js";import"./useBaseUiId-s3ehRo10.js";import"./InternalBackdrop-D1tqsc6f.js";import"./composite-BGGp11kx.js";import"./index-CYSW1VxS.js";import"./index-aIhJZAmJ.js";import"./index-eQPCQQYr.js";import"./useEventCallback-n4YXn8jD.js";import"./SkeletonBar-B8Ad8ahg.js";import"./LoadingCell-UE-4NWGG.js";import"./ColumnConfigDialog-C5xWFU6m.js";import"./DraggableList-B8IxaLCR.js";import"./search-BUGVh3PQ.js";import"./Input-RBsPV06C.js";import"./useControlled-BXYuK13Z.js";import"./Button-SD0gx5bd.js";import"./small-cross-B8TwzzPi.js";import"./ActionButton-BpRFGqnw.js";import"./Checkbox-BWIz-lL7.js";import"./useValueChanged-CYAv_T9U.js";import"./CollapsiblePanel-CZ9dHRXC.js";import"./MultiColumnSortDialog-vfixhd_W.js";import"./MenuTrigger-DV1kYIh9.js";import"./CompositeItem-DI8gVSRQ.js";import"./ToolbarRootContext-DHHYvc0f.js";import"./getDisabledMountTransitionStyles-DNoRrnCX.js";import"./getPseudoElementBounds-BD65du9n.js";import"./chevron-down-CVGUePFi.js";import"./index-qnSLgzX3.js";import"./error-Dk0JQDUN.js";import"./BaseCbacBanner-BA3oIRdg.js";import"./makeExternalStore-BGO-jF6d.js";import"./Tooltip-CPZeRJjC.js";import"./PopoverPopup-BBXIONb1.js";import"./debounce-BsKaorv7.js";import"./useOsdkClient-B4LNNlf9.js";import"./tick-BHeRwjB9.js";import"./DropdownField-BB4TjDf4.js";import"./isEqual--GlCyfF0.js";import"./withOsdkMetrics-R2jYMWim.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
