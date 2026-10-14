import{j as i}from"./iframe-rmDWkA_9.js";import{O as p}from"./object-table-B8aHvZpY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bjc8FAQV.js";import"./preload-helper-C9KhRoGp.js";import"./Table-CDkXqsoq.js";import"./index-BJm_TGuS.js";import"./Dialog-DJB2o2QQ.js";import"./cross-2JsEwOCU.js";import"./svgIconContainer-CMH5VHbE.js";import"./useBaseUiId-eTIPtAex.js";import"./InternalBackdrop-DzWBIKbq.js";import"./composite-CfWqZbx5.js";import"./index-H2c6m-1E.js";import"./index-DxDYposm.js";import"./index-De_UCKOS.js";import"./useEventCallback-D8hCo4Qr.js";import"./SkeletonBar-BKZCl3Vr.js";import"./LoadingCell-C9_6aYmb.js";import"./ColumnConfigDialog-DlL3YS6U.js";import"./DraggableList-BVf7hRf8.js";import"./search-C7TYX9ku.js";import"./Input-ByxvWbQj.js";import"./useControlled-J2jUgDlJ.js";import"./Button-CBc549Tl.js";import"./small-cross-Bj93jEWq.js";import"./ActionButton-fx9WgCVG.js";import"./Checkbox-D7Kuup1h.js";import"./useValueChanged-Cj7F5rYS.js";import"./CollapsiblePanel-BAWkr6_y.js";import"./MultiColumnSortDialog-QVlbyCZ0.js";import"./MenuTrigger-DHmlKjKL.js";import"./CompositeItem-CbLxl7fO.js";import"./ToolbarRootContext-BXp0BN9t.js";import"./getDisabledMountTransitionStyles-B9EO47QZ.js";import"./getPseudoElementBounds-2-r7YzfT.js";import"./chevron-down-BX-4AcWo.js";import"./index-DnhRAwMR.js";import"./error-xYNFBZUd.js";import"./BaseCbacBanner-BAA703FJ.js";import"./makeExternalStore-CTIqcnCN.js";import"./Tooltip-fR1RcwZF.js";import"./PopoverPopup-4q2X5f4w.js";import"./debounce-BvKRQopC.js";import"./useOsdkClient-BM6gicWm.js";import"./tick-CuO5iyTL.js";import"./DropdownField-m3ZbFk-Q.js";import"./isEqual-DdDr95hp.js";import"./withOsdkMetrics-f5SdKW_u.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
