import{j as i}from"./iframe-C0MgyNRE.js";import{O as p}from"./object-table-BLliszwm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CEGGsVbj.js";import"./preload-helper-DQoH0Nuo.js";import"./Table-BqUvw1je.js";import"./index---acoC-r.js";import"./Dialog-DhukfYta.js";import"./cross-CDqB6Pmb.js";import"./svgIconContainer-BKLjPPf4.js";import"./useBaseUiId-Q4ONINdB.js";import"./InternalBackdrop-rlHdNk5g.js";import"./composite-BfZwON16.js";import"./index-AZR5iI7Q.js";import"./index-C-iYCFDc.js";import"./index-DVx8jUCi.js";import"./useEventCallback-D9l2Sgfp.js";import"./SkeletonBar-CTwZ2QYa.js";import"./LoadingCell-DxXNh-zl.js";import"./ColumnConfigDialog-DxvHuOv6.js";import"./DraggableList-DP2OraGG.js";import"./search-CnqYke8S.js";import"./Input-BAC6a1Nu.js";import"./useControlled-BBrJL19c.js";import"./Button-DPYKSMTC.js";import"./small-cross-gL4Blcc6.js";import"./ActionButton-DcSbKUFA.js";import"./Checkbox-DWFxIo3E.js";import"./useValueChanged-rqsds79W.js";import"./CollapsiblePanel-DBgZ58Ev.js";import"./MultiColumnSortDialog-D0RWAJ94.js";import"./MenuTrigger-CCqSXm39.js";import"./CompositeItem-4Z6N9TGd.js";import"./ToolbarRootContext-DTiKt-1r.js";import"./getDisabledMountTransitionStyles-DOeog0sh.js";import"./getPseudoElementBounds-f4HbG8Fm.js";import"./chevron-down-3JGU9uXG.js";import"./index-DLQpaEnR.js";import"./error-DWVeEt8h.js";import"./BaseCbacBanner-BCZLghhn.js";import"./makeExternalStore-CJPI6JTX.js";import"./Tooltip-BhEegg2P.js";import"./isObject-BQeCy5y1.js";import"./debounce-Bi1ZMfOq.js";import"./useOsdkClient-Ccq50_Dk.js";import"./tick-8uJq1GYC.js";import"./DropdownField-GlOSN0XT.js";import"./isEqual-DYvTBXV4.js";import"./_baseIsEqual-CEtqIxGI.js";import"./withOsdkMetrics-DhnlLT_e.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
