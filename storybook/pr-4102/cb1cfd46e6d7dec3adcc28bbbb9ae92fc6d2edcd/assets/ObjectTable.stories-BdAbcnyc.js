import{j as i}from"./iframe-DwrFhh8X.js";import{O as p}from"./object-table-CJzeSeXo.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BEhQtKCn.js";import"./preload-helper-CtRLQ8d2.js";import"./Table-13zpn8as.js";import"./index-2C7ws8qd.js";import"./Dialog-DS-5XWpx.js";import"./cross-CPVTirRP.js";import"./svgIconContainer-Dfv48f4w.js";import"./useBaseUiId-hjF8-Tkz.js";import"./InternalBackdrop-DmelpGzC.js";import"./composite-CQaDz_1E.js";import"./index-BkjyrkST.js";import"./index-8KaHvHT1.js";import"./index-B506KqcM.js";import"./useEventCallback-CbGT4h-v.js";import"./SkeletonBar-CMgVfScc.js";import"./LoadingCell-8g3xYOyz.js";import"./ColumnConfigDialog-q_yUURCK.js";import"./DraggableList-DI3JA3k6.js";import"./search-B4eh0B39.js";import"./Input-CETxnph3.js";import"./useControlled-BWpptLO1.js";import"./Button-DEic01Xh.js";import"./small-cross-rfi-MHsz.js";import"./ActionButton-DK21FKAO.js";import"./Checkbox-6XyOUM_K.js";import"./useValueChanged-OVYV8k4d.js";import"./CollapsiblePanel-noq47swC.js";import"./MultiColumnSortDialog-CmjG40p4.js";import"./MenuTrigger-CYKsI8ZE.js";import"./CompositeItem-Cjr-y7lk.js";import"./ToolbarRootContext-BgJLWr5w.js";import"./getDisabledMountTransitionStyles-DEaamNv3.js";import"./getPseudoElementBounds-Bjx3ag9L.js";import"./chevron-down-BBihCk-h.js";import"./index-DvIHEHIa.js";import"./error-Cw2yDStD.js";import"./BaseCbacBanner-DaIP8iL7.js";import"./makeExternalStore-BDmfTWiu.js";import"./Tooltip-D0M9LXTB.js";import"./PopoverPopup-AoPTNcjX.js";import"./debounce-Do8EHXfQ.js";import"./useOsdkClient-BGkJfb9L.js";import"./tick-FFgtl-J5.js";import"./DropdownField-69nLBGPA.js";import"./isEqual-f_qiuOaO.js";import"./withOsdkMetrics-BhQ--KKZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
