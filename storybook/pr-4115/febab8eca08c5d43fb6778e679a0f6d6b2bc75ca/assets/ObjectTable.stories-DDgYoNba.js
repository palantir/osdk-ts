import{j as i}from"./iframe-DJpO_6mK.js";import{O as p}from"./object-table-B2dN-LCc.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C7apMZwr.js";import"./preload-helper-GI-tMhcV.js";import"./Table-Dg3D6S30.js";import"./index-Da0zq60o.js";import"./Dialog-SMe1UAwu.js";import"./cross-7wx910Yp.js";import"./svgIconContainer-BXariDMs.js";import"./useBaseUiId-V4YDTLU-.js";import"./InternalBackdrop-C73rlr0M.js";import"./composite-BF9Swh2Y.js";import"./index-Lks_ei54.js";import"./index-THQXJEcW.js";import"./index-CoNUXFpY.js";import"./useEventCallback-BqBJVn3L.js";import"./SkeletonBar-B9TWtrAf.js";import"./LoadingCell-D0pm2UJs.js";import"./ColumnConfigDialog-BXqg7A2E.js";import"./DraggableList-BupV1NOa.js";import"./search-yqKQokLr.js";import"./Input-DGLD7TKX.js";import"./useControlled-qKe1fmb3.js";import"./Button-CwysH2z4.js";import"./small-cross-BCt-wViZ.js";import"./ActionButton-wdIB-PMi.js";import"./Checkbox-D0UVX6R0.js";import"./useValueChanged-D5XUhKWQ.js";import"./CollapsiblePanel-BI6lLrWz.js";import"./MultiColumnSortDialog-UPP_Mqyi.js";import"./MenuTrigger-FkklsD17.js";import"./CompositeItem-9_63dtCO.js";import"./ToolbarRootContext-BlqCCViI.js";import"./getDisabledMountTransitionStyles-BVq8IuaH.js";import"./getPseudoElementBounds-DvuhtSAs.js";import"./chevron-down-BVx0EdZG.js";import"./index-DplCgUMJ.js";import"./error-xwSiXxIa.js";import"./BaseCbacBanner-lBQW8ZlB.js";import"./makeExternalStore-DoNjT8AE.js";import"./Tooltip-Df3DP3K9.js";import"./PopoverPopup-DsCmiqgE.js";import"./debounce-8z5zliAt.js";import"./useOsdkClient-B5AQFXxh.js";import"./tick-C6jkrubs.js";import"./DropdownField-QCgrRwcb.js";import"./isEqual-CUL7d5KT.js";import"./withOsdkMetrics-CaCBUU14.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
