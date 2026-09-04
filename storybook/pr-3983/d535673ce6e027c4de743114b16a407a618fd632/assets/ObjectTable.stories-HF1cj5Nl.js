import{j as i}from"./iframe-DXaJ13QU.js";import{O as p}from"./object-table-VofzUvoC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Caxeko2g.js";import"./preload-helper-BroFP_lE.js";import"./Table-BFVnIaUX.js";import"./index-DZFr4IUe.js";import"./Dialog-BhsRLiCm.js";import"./cross-B9pf8KCz.js";import"./svgIconContainer-Cok1WmRf.js";import"./useBaseUiId-rib_Fnun.js";import"./InternalBackdrop-Zj2BFMXg.js";import"./composite-BAacjU3A.js";import"./index-DRifIPLC.js";import"./index-Dw57ybl-.js";import"./index-Cr1sYr80.js";import"./useEventCallback-DIhZQMlD.js";import"./SkeletonBar-MGki9n80.js";import"./LoadingCell-DiCXqZhH.js";import"./ColumnConfigDialog-Cnv2RkuX.js";import"./DraggableList-DWGRmIR2.js";import"./search-BhfCLASk.js";import"./Input-5PPkwes4.js";import"./useControlled-DEmQR29N.js";import"./Button-DN8eJVF0.js";import"./small-cross-BBUhfExp.js";import"./ActionButton-Cj_9HOV9.js";import"./Checkbox-BJULk6T0.js";import"./useValueChanged-CGfRbHou.js";import"./CollapsiblePanel-DPEWUotT.js";import"./MultiColumnSortDialog-DAb6n93R.js";import"./MenuTrigger-JsevVKSq.js";import"./CompositeItem-UfCVn6ij.js";import"./ToolbarRootContext-Cz-twL-R.js";import"./getDisabledMountTransitionStyles-BAol_-Lj.js";import"./getPseudoElementBounds-DlPJcayw.js";import"./chevron-down-BggCntkx.js";import"./index-BGAyhcr2.js";import"./error-Cm275nno.js";import"./BaseCbacBanner-CMuvBih-.js";import"./makeExternalStore-YZAYYspW.js";import"./Tooltip-CkUCTSSv.js";import"./PopoverPopup-BKrHCY-Q.js";import"./debounce-C3pc2scv.js";import"./useOsdkClient-B7wuXGjj.js";import"./tick-dOHg_t3C.js";import"./DropdownField-C6212O3_.js";import"./isEqual-BCP2gqmY.js";import"./withOsdkMetrics-hFb6ubqE.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
