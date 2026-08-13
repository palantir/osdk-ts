import{j as i}from"./iframe-Chm34oVN.js";import{O as p}from"./object-table-DLH-IlCC.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CTaTgjp6.js";import"./preload-helper-BOK6Dzo-.js";import"./Table-Z_YlzvhM.js";import"./index-CypedJkd.js";import"./Dialog-B2wjSRNU.js";import"./cross-DoHdapX8.js";import"./svgIconContainer-DC37vkSl.js";import"./useBaseUiId-BfNds6QM.js";import"./InternalBackdrop-Cm6PR78x.js";import"./composite-7460sgXR.js";import"./index-COQyuwtf.js";import"./index-CUU4KiqC.js";import"./index-B57JJe68.js";import"./useEventCallback-CMTqZ7U-.js";import"./SkeletonBar-CU8fYuS7.js";import"./LoadingCell-BO3KKJp9.js";import"./ColumnConfigDialog-dEtYIgcd.js";import"./DraggableList-CzcIVFL1.js";import"./search-BHYw-t4y.js";import"./Input-DZjL7Pin.js";import"./useControlled-ZXPTCd_T.js";import"./Button-CtcVqQNq.js";import"./small-cross-ByxAk5Ey.js";import"./ActionButton-BnvQSX1L.js";import"./Checkbox-CwbP-fJg.js";import"./useValueChanged-UjzGqVwC.js";import"./CollapsiblePanel-DQDBFvxE.js";import"./MultiColumnSortDialog-DOycdkre.js";import"./MenuTrigger-CoVY6-8A.js";import"./CompositeItem-DnyMtLMv.js";import"./ToolbarRootContext-OjMSVEL3.js";import"./getDisabledMountTransitionStyles-CIU0Hz6V.js";import"./getPseudoElementBounds-CiNXNTFC.js";import"./chevron-down-zW3En9pY.js";import"./index-DxO1uITv.js";import"./error-B18D31eI.js";import"./BaseCbacBanner-CLHS5zkZ.js";import"./makeExternalStore-B83DbUt5.js";import"./Tooltip-DDNENBtX.js";import"./PopoverPopup-CItQzQdy.js";import"./debounce-CFIeXkJ1.js";import"./useOsdkClient-W7CUWIOG.js";import"./tick-Cfjw9luN.js";import"./DropdownField-DB-krMlw.js";import"./isEqual-hrbqThCV.js";import"./withOsdkMetrics-866m-zhW.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
