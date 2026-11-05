import{j as i}from"./iframe-CvJ7R438.js";import{O as p}from"./object-table-C-dXUROV.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B-s66diR.js";import"./preload-helper-DIeUWadq.js";import"./Table-Bpllq0pJ.js";import"./index-Yp0JQF0Q.js";import"./Dialog-DDvLQ08U.js";import"./cross-Bghy2D6j.js";import"./svgIconContainer-Do6jakIy.js";import"./useBaseUiId-DvuukT3m.js";import"./InternalBackdrop-DIMQ-6Vm.js";import"./composite-DfVEv5DW.js";import"./index-BYKE8oqY.js";import"./index-C9e5xM7h.js";import"./index-DjdEDxKf.js";import"./useEventCallback-Ceqj6vPq.js";import"./SkeletonBar-DTVxz4FG.js";import"./LoadingCell-vsektYoj.js";import"./ColumnConfigDialog-DzJfZIO5.js";import"./DraggableList-B5vRq8Cg.js";import"./search-E1Tz1S2U.js";import"./Input-DgEbo1rm.js";import"./useControlled-CupkKwbr.js";import"./Button-E3u3fwJi.js";import"./small-cross-ZhIYpIQC.js";import"./ActionButton-gsNyAvhi.js";import"./Checkbox-DHzqbM_W.js";import"./useValueChanged-DyrikMQP.js";import"./CollapsiblePanel-Cd75DTG9.js";import"./MultiColumnSortDialog-DbWlhP4_.js";import"./MenuTrigger-DGf-np7_.js";import"./CompositeItem-DpqRoFwU.js";import"./ToolbarRootContext-pG56Avmq.js";import"./getDisabledMountTransitionStyles-CsC3z-SK.js";import"./getPseudoElementBounds-Bt_46i7g.js";import"./chevron-down-B1-Mj5AF.js";import"./index-g6hJSz-5.js";import"./error-E1ZphxDs.js";import"./BaseCbacBanner-BDYCcgoT.js";import"./makeExternalStore-Q33cok2O.js";import"./Tooltip-De3XT7Ee.js";import"./isObject-B4JmPlvj.js";import"./debounce-D0MzLxIy.js";import"./useOsdkClient-QthKgn3A.js";import"./tick-BQ8d0QDt.js";import"./DropdownField-DpIokx-i.js";import"./isEqual-CTycJoYm.js";import"./_baseIsEqual-CzgPLVfB.js";import"./withOsdkMetrics-ByVOuDU9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
