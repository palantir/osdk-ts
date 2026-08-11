import{j as i}from"./iframe-Da5478sC.js";import{O as p}from"./object-table-DtiJO51Q.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DjtNAOYe.js";import"./preload-helper-DIyxpJKV.js";import"./Table-CMNOjmkQ.js";import"./index-DNUZO8F_.js";import"./Dialog-DBKDuyse.js";import"./cross-CnU_MB9h.js";import"./svgIconContainer-C6HFRanw.js";import"./useBaseUiId-D_WzVsv0.js";import"./InternalBackdrop-COzQqh_O.js";import"./composite-DnOwfSyn.js";import"./index-BxjGMzYA.js";import"./index-Dg9rFNqX.js";import"./index-BnogVFR6.js";import"./useEventCallback-gkM1vPOl.js";import"./SkeletonBar-DKwwkyqs.js";import"./LoadingCell-CgwHE-u8.js";import"./ColumnConfigDialog-CfPFnbZz.js";import"./DraggableList-CmqONMxF.js";import"./search-CeQH1KSS.js";import"./Input-C8_9EasY.js";import"./useControlled-CbcU3cLx.js";import"./isEqual-flbVqJAh.js";import"./isObject-OhMF8RZ7.js";import"./Button-u_Jmn4Ee.js";import"./ActionButton-CKvKYF4x.js";import"./Checkbox-Dm9tg9z2.js";import"./useValueChanged-D8Ryr8am.js";import"./CollapsiblePanel-BBT7QUlS.js";import"./MultiColumnSortDialog-6FGuFXtY.js";import"./MenuTrigger-DJohB7N6.js";import"./CompositeItem-BYPj8kaj.js";import"./ToolbarRootContext-DU3i--I5.js";import"./getDisabledMountTransitionStyles-DgJLPqi4.js";import"./getPseudoElementBounds-Blt9baCd.js";import"./chevron-down-DDVlB3SF.js";import"./index-2vHiu-ON.js";import"./error-CuOqzkrV.js";import"./BaseCbacBanner-C9AocZ2s.js";import"./makeExternalStore-DxUA_WKV.js";import"./Tooltip-BRr5t85E.js";import"./PopoverPopup-B6NhKGjc.js";import"./toNumber-C4gPlVsP.js";import"./useOsdkClient-BRPJd27D.js";import"./tick-CFs0YPaU.js";import"./DropdownField-CJUYNfrp.js";import"./withOsdkMetrics-BXagX8Z0.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
