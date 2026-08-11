import{j as i}from"./iframe-DYDbEQjg.js";import{O as p}from"./object-table-BCZcuYAt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BlnzcLl_.js";import"./preload-helper-SJ9dZZVr.js";import"./Table-jlOvRX6Y.js";import"./index-DIR1geUe.js";import"./Dialog-BlDW67rF.js";import"./cross-D_scKixK.js";import"./svgIconContainer-C1TqWZyS.js";import"./useBaseUiId-BR9O5v-S.js";import"./InternalBackdrop-D_zpUOVQ.js";import"./composite-uzlB0y27.js";import"./index-0N5Un70a.js";import"./index-BG296H4M.js";import"./index-XBluGdqc.js";import"./useEventCallback-ZA-7jmPZ.js";import"./SkeletonBar-DztZ_7hK.js";import"./LoadingCell-C4rYAYsL.js";import"./ColumnConfigDialog--r3n0gLY.js";import"./DraggableList-BmmAomr4.js";import"./search-tc_uXOKh.js";import"./Input-HmPeHjJ0.js";import"./useControlled-CZkLI-xA.js";import"./isEqual-CNt8kgZ5.js";import"./isObject-UV1vgElv.js";import"./Button-CAwJXN2j.js";import"./ActionButton-pWQQMavn.js";import"./Checkbox-VhktoMZM.js";import"./useValueChanged-1kQHKx55.js";import"./CollapsiblePanel-BiF0HPtO.js";import"./MultiColumnSortDialog-W7nPKGnq.js";import"./MenuTrigger-DSWiBjxt.js";import"./CompositeItem-BZwtU7Zd.js";import"./ToolbarRootContext-BmRDBYMy.js";import"./getDisabledMountTransitionStyles-BCvw-dnC.js";import"./getPseudoElementBounds-CLG8begh.js";import"./chevron-down-PWwO_bbr.js";import"./index-1nIkSE_C.js";import"./error-DNHX8GsG.js";import"./BaseCbacBanner-C1t1v-iZ.js";import"./makeExternalStore-CGR7TrJA.js";import"./Tooltip-DZTD2XTO.js";import"./PopoverPopup-D8L2GGi3.js";import"./toNumber-C5Y5isVa.js";import"./useOsdkClient-D9j3w30H.js";import"./tick-CkP52Rdl.js";import"./DropdownField-Q5qj9W2N.js";import"./withOsdkMetrics-Bxa30ZAo.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
