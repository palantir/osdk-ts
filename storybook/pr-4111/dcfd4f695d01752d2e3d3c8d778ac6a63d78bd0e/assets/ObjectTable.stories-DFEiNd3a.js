import{j as i}from"./iframe-BkR_0Whf.js";import{O as p}from"./object-table-BiV8DsTh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DDN2G9yh.js";import"./preload-helper-BZj2lHf4.js";import"./Table-DWdPcWcs.js";import"./index-ZGE4mIMl.js";import"./Dialog-CHqpvbLH.js";import"./cross-Cj_dISDs.js";import"./svgIconContainer-Cq5Gigac.js";import"./useBaseUiId-D0GFLUCc.js";import"./InternalBackdrop-D0JetBQu.js";import"./composite-DK0lUWCR.js";import"./index-BHvnJTnu.js";import"./index-BYjUCuHE.js";import"./index-CxCc5iXi.js";import"./useEventCallback-Cdxw0ly7.js";import"./SkeletonBar-9syakgvG.js";import"./LoadingCell-CprQtNoH.js";import"./ColumnConfigDialog-C6twjef-.js";import"./DraggableList-FbSRwKFW.js";import"./search-BYwC6oDp.js";import"./Input-iGBf8GKC.js";import"./useControlled-qGG-lubz.js";import"./Button-9bj61-xy.js";import"./small-cross-eQubl5AS.js";import"./ActionButton-Cq36Fl98.js";import"./Checkbox-C2MnQ6N0.js";import"./useValueChanged-Tgi1bGwX.js";import"./CollapsiblePanel-DKzvo46z.js";import"./MultiColumnSortDialog-ApIxEZyx.js";import"./MenuTrigger-CVkzJIND.js";import"./CompositeItem-DJJJBa43.js";import"./ToolbarRootContext-B0bmzvoG.js";import"./getDisabledMountTransitionStyles-BmZHkwg0.js";import"./getPseudoElementBounds-DddSmM7X.js";import"./chevron-down-D-JVojHo.js";import"./index-BWbnaTYz.js";import"./error-CceWhdeD.js";import"./BaseCbacBanner-BvjqhU3p.js";import"./makeExternalStore-32xgHA4-.js";import"./Tooltip-W6-jI_uz.js";import"./PopoverPopup-BFEoSKAS.js";import"./debounce-DonsOBxM.js";import"./useOsdkClient-pLSvuV2v.js";import"./tick-u2RvG_GJ.js";import"./DropdownField-CX_iuiat.js";import"./isEqual-LemhL52S.js";import"./withOsdkMetrics-Ejahsq4F.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
