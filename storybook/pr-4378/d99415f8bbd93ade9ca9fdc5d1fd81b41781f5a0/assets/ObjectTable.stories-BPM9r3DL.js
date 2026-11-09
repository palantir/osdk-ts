import{j as i}from"./iframe-DpLKkykb.js";import{O as p}from"./object-table-CCQRTpV6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CcvrTTVA.js";import"./preload-helper-B-LnzVrM.js";import"./Table-BWUlCOMb.js";import"./index-CGUYPJOd.js";import"./Dialog-DzkUvi49.js";import"./cross-CXiMlBtd.js";import"./svgIconContainer-CZQsWSbp.js";import"./useBaseUiId-exgAqZMu.js";import"./InternalBackdrop-DcJ6yFxi.js";import"./composite-B2s1GcRp.js";import"./index-M0qwvu5p.js";import"./index-gBz-IH4J.js";import"./index-4T6xY16C.js";import"./useEventCallback-Vl5Y4MSh.js";import"./SkeletonBar-Dy4BjWyK.js";import"./LoadingCell-lYNsC5b7.js";import"./ColumnConfigDialog-Dzuli4nh.js";import"./DraggableList-DtrhgtKM.js";import"./search-DHqp7hab.js";import"./Input-BRg86MD8.js";import"./useControlled-DGS0wgFX.js";import"./Button-CWQ4920K.js";import"./small-cross-CtsQGPXk.js";import"./ActionButton-SnW7FFWH.js";import"./Checkbox-D_THPq5z.js";import"./useValueChanged-Bq5vV2O3.js";import"./CollapsiblePanel-iZ3dIyoM.js";import"./MultiColumnSortDialog-DtOySDqq.js";import"./MenuTrigger-C0vIePhh.js";import"./CompositeItem-iDk6P1qU.js";import"./ToolbarRootContext-9nybivRl.js";import"./getDisabledMountTransitionStyles-C2Wnkcdr.js";import"./getPseudoElementBounds-CEgSfOsV.js";import"./chevron-down-C95_Fq08.js";import"./index-CLl-8Y0S.js";import"./error-B4GY5Ke1.js";import"./BaseCbacBanner-DZbBMzdd.js";import"./makeExternalStore-CIehlGBq.js";import"./Tooltip-B8_rEhlp.js";import"./isObject-DIeIJOdU.js";import"./debounce-C-RRrtJp.js";import"./useOsdkClient-DOvJ8crf.js";import"./tick-BzN4aODk.js";import"./DropdownField-CLNenIwJ.js";import"./isEqual-Ce49QXZx.js";import"./_baseIsEqual-BzRnqrWM.js";import"./withOsdkMetrics-DU1BWRzI.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const ye=["Default"];export{n as Default,ye as __namedExportsOrder,de as default};
