import{j as i}from"./iframe-CRcSxZM8.js";import{O as p}from"./object-table-uBn8zBa_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-kf-BXrzD.js";import"./preload-helper-ZugcXPGT.js";import"./Table-CeizOyHS.js";import"./index-g1O5dw2n.js";import"./Dialog-DVOZgr_y.js";import"./cross-C5cQzVwl.js";import"./svgIconContainer-BqvfQ7m-.js";import"./useBaseUiId-CR1J1kR-.js";import"./InternalBackdrop-fCyetKcK.js";import"./composite-BjyHBRpa.js";import"./index-Xkx1Z8NF.js";import"./index-DYDBkDSv.js";import"./index-bGeYwVt0.js";import"./useEventCallback-b4efgYNg.js";import"./SkeletonBar-DF8L9OI9.js";import"./LoadingCell-DSxJ4lXT.js";import"./ColumnConfigDialog-BK0vGz9A.js";import"./DraggableList-DyMfJ-4v.js";import"./search-D6xupaDO.js";import"./Input-CNRyhWNO.js";import"./useControlled-DQ_eI8kZ.js";import"./Button-BJQF3YiE.js";import"./small-cross-DOBXkRH7.js";import"./ActionButton-Bd8xK1wy.js";import"./Checkbox-CSgH1SYO.js";import"./useValueChanged-1Q-vBWTO.js";import"./CollapsiblePanel-CJg7yaup.js";import"./MultiColumnSortDialog-oQ4vf-Ce.js";import"./MenuTrigger-D8y_stY7.js";import"./CompositeItem-Bm_HuJxQ.js";import"./ToolbarRootContext-Ca7X_ytn.js";import"./getDisabledMountTransitionStyles-_vmGqUmn.js";import"./getPseudoElementBounds-C1tiKeFn.js";import"./chevron-down-D5oDo9t-.js";import"./index-DLIQOwa5.js";import"./error-Dn8wlh4f.js";import"./BaseCbacBanner-CPk0CIOw.js";import"./makeExternalStore-C137KZPA.js";import"./Tooltip-CEnfBt0P.js";import"./PopoverPopup-BFEF8WU9.js";import"./debounce-CipQE0Vz.js";import"./useOsdkClient-BMdzqGfU.js";import"./tick-B26TJQOE.js";import"./DropdownField-Cr1UeBNB.js";import"./isEqual-BUgFxM2N.js";import"./withOsdkMetrics-D8xbJlmg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
