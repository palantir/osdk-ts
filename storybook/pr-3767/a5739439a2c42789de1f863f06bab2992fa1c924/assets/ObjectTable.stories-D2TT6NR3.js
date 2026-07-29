import{j as i}from"./iframe-Dj2cKGnO.js";import{O as p}from"./object-table-DDtFqPBI.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-o-OjSzYN.js";import"./preload-helper-C4DRB2fG.js";import"./Table-BXXgJkx5.js";import"./index-BO7YIbLm.js";import"./Dialog-BC0N5_7u.js";import"./cross-BR_uQDj2.js";import"./svgIconContainer-BpBQ0iGt.js";import"./useBaseUiId-e1nCQA8K.js";import"./InternalBackdrop-eWkjZ7Vn.js";import"./composite-5gl7qD0t.js";import"./index-Cz2dMcbH.js";import"./index-D7Xl9lR0.js";import"./index-pt5WX9KE.js";import"./useEventCallback-JFaXoDI3.js";import"./SkeletonBar-CQWkQwyM.js";import"./LoadingCell-B7lsHsqt.js";import"./ColumnConfigDialog-BIFV4IGe.js";import"./DraggableList-CswUdwxo.js";import"./search-C6Gs3wIW.js";import"./Input-DJhGkZgO.js";import"./useControlled-B1nPULYy.js";import"./isEqual-CkFRBfKF.js";import"./isObject-CWqdK9wF.js";import"./Button-CptP105M.js";import"./ActionButton-DHight5r.js";import"./Checkbox-DglfwZeF.js";import"./useValueChanged-DZZ5yUcK.js";import"./CollapsiblePanel-7hMlZynw.js";import"./MultiColumnSortDialog-BkXML1Gy.js";import"./MenuTrigger-Bu-Wot8X.js";import"./CompositeItem-BjekPXkF.js";import"./ToolbarRootContext-BHEFpPDT.js";import"./getDisabledMountTransitionStyles-Dev7gewU.js";import"./getPseudoElementBounds-D8dLGn3J.js";import"./chevron-down-LbKJSdTq.js";import"./index-CkLjKLx-.js";import"./error-DP1wqNc6.js";import"./BaseCbacBanner-Dgb48O8R.js";import"./makeExternalStore-BicNN6mB.js";import"./Tooltip-CucWZmFu.js";import"./PopoverPopup-lDh7JWpB.js";import"./toNumber-CGgINaIS.js";import"./useOsdkClient-CpNUt0AY.js";import"./tick-uO4W4Tlc.js";import"./DropdownField-BP-vtTDy.js";import"./withOsdkMetrics-BHLwwwlP.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
