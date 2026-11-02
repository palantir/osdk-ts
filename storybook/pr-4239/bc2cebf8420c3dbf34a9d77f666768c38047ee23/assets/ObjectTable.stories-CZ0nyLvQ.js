import{j as i}from"./iframe-CtuQhrts.js";import{O as p}from"./object-table-YlUjTc0K.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DrMqXajE.js";import"./preload-helper-E0wvFVRZ.js";import"./Table-BGrfSwce.js";import"./index-DG_eNmx1.js";import"./Dialog-faHULa3j.js";import"./cross-Bdk_6Gl1.js";import"./svgIconContainer-Bnw8yYHV.js";import"./useBaseUiId-CpQCHWr3.js";import"./InternalBackdrop-BospgbT8.js";import"./composite-rVwQZIBy.js";import"./index-BqjCm1NV.js";import"./index-U7XLybOO.js";import"./index-LE5ZN-pU.js";import"./useEventCallback-D_KcFdlG.js";import"./SkeletonBar-ZTa1S77e.js";import"./LoadingCell-CftHdyJQ.js";import"./ColumnConfigDialog-C7eWN8vR.js";import"./DraggableList-DgMfKVWn.js";import"./search-DiP8_a-2.js";import"./Input-CN20E0rX.js";import"./useControlled-rQPfFHM_.js";import"./Button-D7MvWHhh.js";import"./small-cross-CcRiv3Vk.js";import"./ActionButton-TUlJKdYX.js";import"./Checkbox-C-rEKxYr.js";import"./useValueChanged-BbSU7-N0.js";import"./CollapsiblePanel-Dec68hyl.js";import"./MultiColumnSortDialog-BvQQ1Agg.js";import"./MenuTrigger-DofhHtJd.js";import"./CompositeItem-BIxb8BdJ.js";import"./ToolbarRootContext-BcX0gFdV.js";import"./getDisabledMountTransitionStyles-DeAQV4pF.js";import"./getPseudoElementBounds-6SIsw25g.js";import"./chevron-down-COFpbhrT.js";import"./index-Bn7MWlIG.js";import"./error-DEuUm4lv.js";import"./BaseCbacBanner-CymnVS7Y.js";import"./makeExternalStore-hGhxk8h7.js";import"./Tooltip-CIXf8der.js";import"./PopoverPopup-Dh5q1nAE.js";import"./debounce-bY2G5y8x.js";import"./useOsdkClient-DnuRiMiS.js";import"./tick-CRwQwU7t.js";import"./DropdownField-D4yZkWIJ.js";import"./isEqual-fa-ZCL8Y.js";import"./withOsdkMetrics-mpxIImLJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
