import{j as i}from"./iframe-BTjo4hoa.js";import{O as p}from"./object-table-COqd_imt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DsF6HNi-.js";import"./preload-helper-GDbQ32hR.js";import"./Table-BgnMVoEe.js";import"./index-DzoGtTYW.js";import"./Dialog-BRtSRW0Z.js";import"./cross-C7uzIn7X.js";import"./svgIconContainer-Ci_Sec47.js";import"./useBaseUiId-DiKKztfj.js";import"./InternalBackdrop-C3VRyl9V.js";import"./composite-DnWT1pj_.js";import"./index-DzKvpZVF.js";import"./index-B2_XxYKv.js";import"./index-CoDC80rb.js";import"./useEventCallback-C_wT4v2Q.js";import"./SkeletonBar-Been06Cr.js";import"./LoadingCell-D7jqLojg.js";import"./ColumnConfigDialog-Db1F5W2r.js";import"./DraggableList-D8um3vjp.js";import"./search-CK191Oob.js";import"./Input-C7imWp_z.js";import"./useControlled-DrQ-vlJr.js";import"./Button-BcNFr6aW.js";import"./small-cross-Brkvg0Wi.js";import"./ActionButton-tTZpGoIh.js";import"./Checkbox-w9B-XeGE.js";import"./useValueChanged-CDlZmnEp.js";import"./CollapsiblePanel-CEseDnp9.js";import"./MultiColumnSortDialog-DMotawsh.js";import"./MenuTrigger-CwoMUaEm.js";import"./CompositeItem-DqO_c0k8.js";import"./ToolbarRootContext-BmwV-jMO.js";import"./getDisabledMountTransitionStyles-ClFFQye4.js";import"./getPseudoElementBounds-DsfXOZwR.js";import"./chevron-down-Ca_e0izc.js";import"./index-Dnr1AQ4b.js";import"./error-D2oiLEA6.js";import"./BaseCbacBanner-fgj6pUDq.js";import"./makeExternalStore-Ch7iFOMP.js";import"./Tooltip-BPmE3Z94.js";import"./isObject-aHdVZCJ4.js";import"./debounce-mxu17zY-.js";import"./useOsdkClient-BVjPnTI9.js";import"./tick-B6UzXqFV.js";import"./DropdownField-R4jwd9Zw.js";import"./isEqual-BWdJtmMa.js";import"./_baseIsEqual-D9LRnwMe.js";import"./withOsdkMetrics-DsZGAGfW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,de={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
