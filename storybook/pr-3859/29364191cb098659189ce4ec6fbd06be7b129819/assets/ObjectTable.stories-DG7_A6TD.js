import{j as i}from"./iframe-ClxO4NjR.js";import{O as p}from"./object-table-B_1CuulK.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DiduWOJQ.js";import"./preload-helper-C0zwqbnX.js";import"./Table-CPN45vOi.js";import"./index-BWCYhOnm.js";import"./Dialog-BuPKBq1e.js";import"./cross-DXyr0bNz.js";import"./svgIconContainer-BvC_SFje.js";import"./useBaseUiId-mbHRa4ig.js";import"./InternalBackdrop-DGb5grRA.js";import"./composite-B__OAHDn.js";import"./index-BZg1jqES.js";import"./index-DE2Njq5W.js";import"./index-DpzXFkZR.js";import"./useEventCallback-Co3RDJvl.js";import"./SkeletonBar-bSEBZ09P.js";import"./LoadingCell-CXMRjvOm.js";import"./ColumnConfigDialog-CHDvFhNn.js";import"./DraggableList-BMsve3lG.js";import"./search-C0Wbe_TX.js";import"./Input-CDMrsEOr.js";import"./useControlled-CBuD11wc.js";import"./isEqual-zsjKM9aa.js";import"./isObject-Cm7OR2iz.js";import"./Button-CrUVT3U1.js";import"./ActionButton-BYrKQTuf.js";import"./Checkbox-BQ07bYzl.js";import"./useValueChanged-DH6dVKYy.js";import"./CollapsiblePanel-Cn58OeIc.js";import"./MultiColumnSortDialog-BuljqIUh.js";import"./MenuTrigger-DzzjAqeR.js";import"./CompositeItem-CIWFMAgC.js";import"./ToolbarRootContext-CCOvFsGt.js";import"./getDisabledMountTransitionStyles-tEdN7Og9.js";import"./getPseudoElementBounds-C05aLgmo.js";import"./chevron-down-BXi8nOG0.js";import"./index-D92ajlqI.js";import"./error-97F9Ilv7.js";import"./BaseCbacBanner-DoEUJfvC.js";import"./makeExternalStore-CFCzzqiP.js";import"./Tooltip-dtP77QJH.js";import"./PopoverPopup-BCBH3KD8.js";import"./toNumber-D2QUkYkC.js";import"./useOsdkClient-COh8E9Bx.js";import"./tick-C-J6268_.js";import"./DropdownField-BvThcx6q.js";import"./withOsdkMetrics-CfQvwroh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
