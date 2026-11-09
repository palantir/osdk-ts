import{j as i}from"./iframe-YacpH74x.js";import{O as p}from"./object-table-CzLcdutJ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cw1ow4jB.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-2LzXwrqd.js";import"./index-BEoxUJoA.js";import"./Dialog-DCpNjqMS.js";import"./cross-CMJXQf2R.js";import"./svgIconContainer-BUTn-dCB.js";import"./useBaseUiId-4SFOUSCG.js";import"./InternalBackdrop-DDtJr629.js";import"./composite-DelgFzsG.js";import"./index-C1Y9ReN9.js";import"./index-LgDXHTpd.js";import"./index-1dtThzIn.js";import"./useEventCallback-DDDkCV7z.js";import"./SkeletonBar-BBSYPOGa.js";import"./LoadingCell-DWVtc3pf.js";import"./ColumnConfigDialog-DA6q_x97.js";import"./DraggableList-DBygpyD8.js";import"./search-BkFAurUd.js";import"./Input-CU1bZoi8.js";import"./useControlled-CNlO3TEz.js";import"./Button-CZyYceU0.js";import"./small-cross-REHTtvDB.js";import"./ActionButton-DUE8wiZa.js";import"./Checkbox-D0RH7vMl.js";import"./useValueChanged-BoESC3Qa.js";import"./CollapsiblePanel-DjUqTnvZ.js";import"./MultiColumnSortDialog-CQ-vPwoW.js";import"./MenuTrigger-lR-8lec2.js";import"./CompositeItem-T4MrQSqM.js";import"./ToolbarRootContext-BntDugl_.js";import"./getDisabledMountTransitionStyles-B7EUIZcg.js";import"./getPseudoElementBounds-CG4o1vUb.js";import"./chevron-down-Ce1omtAP.js";import"./index-D-e4FuV7.js";import"./error-D9NpDKzr.js";import"./BaseCbacBanner-9NQw6BEw.js";import"./makeExternalStore-wqA1Cewh.js";import"./Tooltip-B6tb3JER.js";import"./isObject-WXcao9eA.js";import"./debounce-B9DyVsKD.js";import"./useOsdkClient-BV0fBL9y.js";import"./tick-GVLywL7s.js";import"./DropdownField-v0enRbIn.js";import"./isEqual-CRPrjyFp.js";import"./_baseIsEqual-DTo6H5VA.js";import"./withOsdkMetrics-nLoJ6ux7.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
