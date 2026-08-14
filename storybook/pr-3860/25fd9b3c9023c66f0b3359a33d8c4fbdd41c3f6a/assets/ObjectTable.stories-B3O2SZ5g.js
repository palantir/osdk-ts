import{j as i}from"./iframe-CJPoXIdZ.js";import{O as p}from"./object-table-BHkoWQFR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-lCEtHPbC.js";import"./preload-helper-DGk6rLQG.js";import"./Table-D-7b-7oi.js";import"./index-CXK_NZ43.js";import"./Dialog-BlWwmQIa.js";import"./cross-Dq-QBGPd.js";import"./svgIconContainer-B3Dfwo1Q.js";import"./useBaseUiId-D6aoT1Vn.js";import"./InternalBackdrop-BEqTQV7z.js";import"./composite-Brnc4VBJ.js";import"./index-Dy201pDm.js";import"./index-PUf2omP-.js";import"./index-BmxZeQc3.js";import"./useEventCallback-BeTsBj0A.js";import"./SkeletonBar-DaBxIru1.js";import"./LoadingCell-BZAzRsui.js";import"./ColumnConfigDialog-CZhYh1U6.js";import"./DraggableList-C7EkDEXn.js";import"./search-N923D2wf.js";import"./Input-CSVKB_cm.js";import"./useControlled-DXtgIEAm.js";import"./Button-CQw5BJQp.js";import"./small-cross-C_XsSYtI.js";import"./ActionButton-BIRmJltO.js";import"./Checkbox-BRCSdLNp.js";import"./useValueChanged-Dg50Qt5M.js";import"./CollapsiblePanel-B5wOJsY7.js";import"./MultiColumnSortDialog-DvA6eEFL.js";import"./MenuTrigger-BrjKygne.js";import"./CompositeItem-U-yEQuGu.js";import"./ToolbarRootContext-BqWwwnkb.js";import"./getDisabledMountTransitionStyles-DWZKj-84.js";import"./getPseudoElementBounds-Cs9DzhU4.js";import"./chevron-down-DWXqDmWL.js";import"./index-DxnFXTkq.js";import"./error-D4yXIjcx.js";import"./BaseCbacBanner-B3ISw_rb.js";import"./makeExternalStore-N7Z3gQ47.js";import"./Tooltip-Qms5IOYu.js";import"./PopoverPopup-B3C33Lia.js";import"./debounce-BMm6nppJ.js";import"./useOsdkClient-D0mJbrjB.js";import"./tick-Hovf-t6n.js";import"./DropdownField-BjRk_o0m.js";import"./isEqual-Moo6eESv.js";import"./withOsdkMetrics-B97C_82M.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
