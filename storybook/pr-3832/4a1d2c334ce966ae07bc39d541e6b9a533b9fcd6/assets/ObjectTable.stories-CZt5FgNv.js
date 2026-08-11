import{j as i}from"./iframe-DK1Bt9lv.js";import{O as p}from"./object-table-BJfc_JiE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Hrk4Ac6J.js";import"./preload-helper-Ce-wMa_v.js";import"./Table-BvfijykH.js";import"./index-CJSZk4qc.js";import"./Dialog-DeDAzYSk.js";import"./cross-Bx8fvQ0o.js";import"./svgIconContainer-DnjSjGLw.js";import"./useBaseUiId-DcgI8Re9.js";import"./InternalBackdrop-DeJUZl5c.js";import"./composite-IGJfPAlR.js";import"./index-BrXtLi8t.js";import"./index-CNbmxn8b.js";import"./index-DLgHg94v.js";import"./useEventCallback-DsecKjof.js";import"./SkeletonBar-DYCXLh-o.js";import"./LoadingCell-BRKLo6k7.js";import"./ColumnConfigDialog-BmxPhrz9.js";import"./DraggableList-5MSRI83R.js";import"./search-DHCd6J0K.js";import"./Input-AKXtTaZ-.js";import"./useControlled-vdS8rpXB.js";import"./isEqual-DrfEbAtv.js";import"./isObject-CbGGjkoY.js";import"./Button-pHFcucNO.js";import"./ActionButton-Dl2tXDzA.js";import"./Checkbox-CsCjtHTy.js";import"./useValueChanged-CNGxwAjW.js";import"./CollapsiblePanel-mjGJ_uYQ.js";import"./MultiColumnSortDialog-DUErvo2r.js";import"./MenuTrigger-9rcHn7MF.js";import"./CompositeItem-ZQw-TopT.js";import"./ToolbarRootContext-B7RkTGG6.js";import"./getDisabledMountTransitionStyles-1XkDDMjF.js";import"./getPseudoElementBounds-COD7nLet.js";import"./chevron-down-P75F9EWq.js";import"./index-C4v2X0sV.js";import"./error-DuaK5v6b.js";import"./BaseCbacBanner-BrSR8m67.js";import"./makeExternalStore-CwRDfOI3.js";import"./Tooltip-nETMUHwn.js";import"./PopoverPopup-CWfM8YvS.js";import"./toNumber-CgJ7wHM0.js";import"./useOsdkClient-CKcJlW4_.js";import"./tick-Bb3xLDWX.js";import"./DropdownField-rJUVruli.js";import"./withOsdkMetrics-BJBKWdiy.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
