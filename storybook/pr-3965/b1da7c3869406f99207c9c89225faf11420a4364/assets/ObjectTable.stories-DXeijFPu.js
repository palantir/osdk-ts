import{j as i}from"./iframe-BfGhSrhj.js";import{O as p}from"./object-table-D57w4M3x.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CEHHlXE-.js";import"./preload-helper-vxwuBi5M.js";import"./Table-Csc7HXTE.js";import"./index-BpzGyY_9.js";import"./Dialog-LUYl8QRA.js";import"./cross-Bn7q8aps.js";import"./svgIconContainer-B7iRS6fY.js";import"./useBaseUiId-Crf4zNct.js";import"./InternalBackdrop-CVI9nmOg.js";import"./composite-BgMCZbwS.js";import"./index-Bi5q9Arz.js";import"./index-DXdjOqiL.js";import"./index-BWg0FpKS.js";import"./useEventCallback-BZV3Iwak.js";import"./SkeletonBar-CEr1E5VO.js";import"./LoadingCell-CWnR_u7w.js";import"./ColumnConfigDialog-BNDdVe-W.js";import"./DraggableList-BoblDgWY.js";import"./search-ByYdnjPp.js";import"./Input-BfWLU8Yl.js";import"./useControlled-Cqj-8esb.js";import"./Button-CF2oqfBr.js";import"./small-cross-DZ73Q1fw.js";import"./ActionButton-_wE0oZ9W.js";import"./Checkbox-sV8w9OKW.js";import"./useValueChanged-Bpisl4CB.js";import"./CollapsiblePanel-BK0gVPbW.js";import"./MultiColumnSortDialog-DqEvvmTL.js";import"./MenuTrigger-3j5xhVQZ.js";import"./CompositeItem-6BwZmfcB.js";import"./ToolbarRootContext-CcKAs7gU.js";import"./getDisabledMountTransitionStyles-QeVB0pEF.js";import"./getPseudoElementBounds-BmPRbc2u.js";import"./chevron-down-CkhCniF6.js";import"./index-D5LJWRJq.js";import"./error-CBS_ohw_.js";import"./BaseCbacBanner-vIuQauGI.js";import"./makeExternalStore-s41uljGH.js";import"./Tooltip-BwJ3b4PV.js";import"./PopoverPopup-CWniRTA-.js";import"./debounce-DNM_Pm0s.js";import"./useOsdkClient-BXxAdvut.js";import"./tick-_Dn2hUgn.js";import"./DropdownField-D4BYnBW1.js";import"./isEqual-2U2BkhhQ.js";import"./withOsdkMetrics-DtIhmsVW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
