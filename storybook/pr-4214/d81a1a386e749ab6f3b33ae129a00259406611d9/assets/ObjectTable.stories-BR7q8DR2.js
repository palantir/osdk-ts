import{j as i}from"./iframe-Dm4_VxTL.js";import{O as p}from"./object-table-BRm1lHno.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CSxEZr99.js";import"./preload-helper-CLzuKVE9.js";import"./Table-DfRe5ueh.js";import"./index-DPnE6q58.js";import"./Dialog-m-8WzSUm.js";import"./cross-DHCOcICo.js";import"./svgIconContainer-CxeeKywm.js";import"./useBaseUiId-D93ZS7uD.js";import"./InternalBackdrop-BS6ANn3h.js";import"./composite-BJxyUUdi.js";import"./index-BP8U4N-x.js";import"./index-T3ZNqMdJ.js";import"./index-Buyt4UOA.js";import"./useEventCallback-DBHwmb2c.js";import"./SkeletonBar-DhJDhcRv.js";import"./LoadingCell-4LcK7B3q.js";import"./ColumnConfigDialog-CDkZggGo.js";import"./DraggableList-BVEqvSFu.js";import"./search-D_26udtD.js";import"./Input-i9kUqoLh.js";import"./useControlled-B_aXLH8g.js";import"./Button-Bzv6XgGX.js";import"./small-cross-DkNS4-YY.js";import"./ActionButton-CYmCepXw.js";import"./Checkbox-CtXRJU5l.js";import"./useValueChanged-iV7bvjzs.js";import"./CollapsiblePanel-C06Pqxf1.js";import"./MultiColumnSortDialog-BKV7E77X.js";import"./MenuTrigger-0EKBwlog.js";import"./CompositeItem-CY6sGbtS.js";import"./ToolbarRootContext-BL7rYCZY.js";import"./getDisabledMountTransitionStyles-Bt69eCjx.js";import"./getPseudoElementBounds-BBXWE-v2.js";import"./chevron-down-CO8_Do7Y.js";import"./index-c6XPu-54.js";import"./error-D_jQgHrY.js";import"./BaseCbacBanner-BzTMdPsR.js";import"./makeExternalStore-C9EcSKlD.js";import"./Tooltip-uKlMJCx4.js";import"./PopoverPopup-CvZJgDeN.js";import"./debounce-C1x-2e5s.js";import"./useOsdkClient-CcArCLJk.js";import"./tick-CIiArSAU.js";import"./DropdownField-DsklnAii.js";import"./isEqual-CXek_UgW.js";import"./withOsdkMetrics-DBhVFgeV.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
