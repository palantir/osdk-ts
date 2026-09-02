import{j as i}from"./iframe-CnAEf3IJ.js";import{O as p}from"./object-table-CVC6DRWA.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DeZYaNjQ.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-gdJyLBjs.js";import"./index-B8Nz7JJW.js";import"./Dialog-D5gMprTa.js";import"./cross-Dt0cGPfd.js";import"./svgIconContainer-BIdExII8.js";import"./useBaseUiId-CeIC7NO6.js";import"./InternalBackdrop-YQuz4Vbl.js";import"./composite-CL6haQa-.js";import"./index-BcvNcIza.js";import"./index-CX6f-w2g.js";import"./index-Cig9tftr.js";import"./useEventCallback-BWgthKhM.js";import"./SkeletonBar-BTUrihaF.js";import"./LoadingCell-D8x3FqkS.js";import"./ColumnConfigDialog-cy0zOBw1.js";import"./DraggableList-BzcZwy3J.js";import"./search-CEklk6Yi.js";import"./Input-x_02lyVD.js";import"./useControlled-B_4lFiHq.js";import"./Button-C2qyHp3c.js";import"./small-cross-BLoBHL9y.js";import"./ActionButton-DZsexcaK.js";import"./Checkbox-DdiUBOXq.js";import"./useValueChanged-Ch6t91n6.js";import"./CollapsiblePanel-Di9dac_w.js";import"./MultiColumnSortDialog-7Aw90Y90.js";import"./MenuTrigger-CW4cqosj.js";import"./CompositeItem-ByBfsUTK.js";import"./ToolbarRootContext-CoOtTfWl.js";import"./getDisabledMountTransitionStyles-DPIKQDtQ.js";import"./getPseudoElementBounds-DpmHiwP5.js";import"./chevron-down-Bwa7GCIs.js";import"./index-FiIn5sfi.js";import"./error-1wJ1mTzx.js";import"./BaseCbacBanner-CuOgkWVK.js";import"./makeExternalStore-DBD3eHtk.js";import"./Tooltip-bXPrz9QG.js";import"./PopoverPopup-CUX5PsPP.js";import"./debounce-CxmUTlgJ.js";import"./useOsdkClient-Cy9h7b-X.js";import"./tick-IIhkou4I.js";import"./DropdownField-DKvh0G9S.js";import"./isEqual-D4BavgyG.js";import"./withOsdkMetrics-B8y7kht9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
