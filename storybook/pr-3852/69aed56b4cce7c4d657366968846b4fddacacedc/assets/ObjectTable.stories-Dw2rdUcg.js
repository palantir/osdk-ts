import{j as i}from"./iframe-B8GoyF7c.js";import{O as p}from"./object-table-DylVuKP0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C0vkskiq.js";import"./preload-helper-B5kMgiMb.js";import"./Table-Bv_egrMe.js";import"./index-CL1eTbPH.js";import"./Dialog-wsrf6qLX.js";import"./cross-D9o3BuIu.js";import"./svgIconContainer-BNTJvbOM.js";import"./useBaseUiId-Bu2Afjul.js";import"./InternalBackdrop-CuOf1tUN.js";import"./composite-CN8JawkT.js";import"./index-B5C9ERo8.js";import"./index-1KpX_3Nf.js";import"./index-0XyaG4Ey.js";import"./useEventCallback-CxcEgKkZ.js";import"./SkeletonBar-2B0KuUAQ.js";import"./LoadingCell-D9wQxhLO.js";import"./ColumnConfigDialog-DOoFhFmI.js";import"./DraggableList-LwSvRxKn.js";import"./search-ChHon717.js";import"./Input-BoB_S2Yy.js";import"./useControlled-7SLzbWAF.js";import"./isEqual-E-iok-b5.js";import"./isObject-Px9ak30s.js";import"./Button-6Xf5SjjR.js";import"./ActionButton-DYJsKJBt.js";import"./Checkbox-BkmSl6q3.js";import"./useValueChanged-D1lqtZHd.js";import"./CollapsiblePanel-BaaA3CTx.js";import"./MultiColumnSortDialog-DeqDny7L.js";import"./MenuTrigger-BwiZ3WBk.js";import"./CompositeItem-59wLeDqw.js";import"./ToolbarRootContext-Cv3hvHkJ.js";import"./getDisabledMountTransitionStyles-CJn3nWEJ.js";import"./getPseudoElementBounds-4xJQNf4z.js";import"./chevron-down-BUm8spsZ.js";import"./index-D3EOgLBg.js";import"./error-D_8Foosf.js";import"./BaseCbacBanner-UWn7WJB6.js";import"./makeExternalStore-CPUAg4gi.js";import"./Tooltip-DwXyVsXL.js";import"./PopoverPopup-D7j3OXl0.js";import"./toNumber-CTVo6Cd-.js";import"./useOsdkClient-CmwQl11w.js";import"./tick-8N_MNRu5.js";import"./DropdownField-DBIGyTkw.js";import"./withOsdkMetrics-CFIv4gRX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
