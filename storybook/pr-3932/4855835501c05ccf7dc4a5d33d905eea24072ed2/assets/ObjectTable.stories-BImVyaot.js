import{j as i}from"./iframe-bK06rSfy.js";import{O as p}from"./object-table-CfNHyCaW.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DPgVI1PB.js";import"./preload-helper-K-1boSMk.js";import"./Table-DooZ8vNL.js";import"./index-Bk-vtYHe.js";import"./Dialog-DfTgPYnF.js";import"./cross-DGM8nzKR.js";import"./svgIconContainer-C_mLXjp3.js";import"./useBaseUiId-CPLmGW2i.js";import"./InternalBackdrop-C1jV5x8E.js";import"./composite-0P-Pw-2Q.js";import"./index-BduD8wzE.js";import"./index-0oJri5g1.js";import"./index-XSfDDb8C.js";import"./useEventCallback-D4hmh2FX.js";import"./SkeletonBar-B5kg8PuZ.js";import"./LoadingCell-Bm7K6xoF.js";import"./ColumnConfigDialog-3T0mv6B3.js";import"./DraggableList-CM1Q0u6r.js";import"./search-C40Ggweq.js";import"./Input-6uol7Ijj.js";import"./useControlled-CZQizdlE.js";import"./Button-C5Cur8G2.js";import"./small-cross-UJeA-7-z.js";import"./ActionButton-DoZ9G5gm.js";import"./Checkbox-kYTxpgtk.js";import"./useValueChanged-B0rG8P_6.js";import"./CollapsiblePanel-hjau0PKS.js";import"./MultiColumnSortDialog-DTPUQzx2.js";import"./MenuTrigger-BfTDRkjm.js";import"./CompositeItem-ty0K8CzQ.js";import"./ToolbarRootContext-DZ3HHK_z.js";import"./getDisabledMountTransitionStyles-dqQKCBgX.js";import"./getPseudoElementBounds-DWTwPUeQ.js";import"./chevron-down-DULzUbtR.js";import"./index-DjjhcTLl.js";import"./error-Cj1EJ7Ed.js";import"./BaseCbacBanner-D4F9ZWBY.js";import"./makeExternalStore-By3lhuiJ.js";import"./Tooltip-CsKnunI-.js";import"./PopoverPopup-CS_hwUVd.js";import"./debounce-CysAWd9o.js";import"./useOsdkClient-BulRHlgi.js";import"./tick-sjLAC5bb.js";import"./DropdownField-DLu2iZiv.js";import"./isEqual-CsFjEq6w.js";import"./withOsdkMetrics-CEyQ3Kvz.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
