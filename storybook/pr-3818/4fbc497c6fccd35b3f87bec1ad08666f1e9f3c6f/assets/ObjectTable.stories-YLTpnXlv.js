import{j as i}from"./iframe-Cre-9cas.js";import{O as p}from"./object-table-Bg3gsRRi.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BNExDR0J.js";import"./preload-helper-DHrhJo4v.js";import"./Table-Dq3AZrKj.js";import"./index-Cz4GDW4R.js";import"./Dialog-DoK0FYZI.js";import"./cross-CmMOk3cx.js";import"./svgIconContainer-DBkJAZ9O.js";import"./useBaseUiId-DOqKyLzL.js";import"./InternalBackdrop-1FWh9j41.js";import"./composite-0-c1qOZY.js";import"./index-Bm3R8EDL.js";import"./index-BSEjtXWh.js";import"./index-Bs-sQftb.js";import"./useEventCallback-NxP8s_T9.js";import"./SkeletonBar-rO47kBpz.js";import"./LoadingCell-DGZQUZbu.js";import"./ColumnConfigDialog-B8iplsw1.js";import"./DraggableList-BlCKxOBK.js";import"./search-C14d_QIQ.js";import"./Input-BbbRXoqK.js";import"./useControlled-hjvc-0on.js";import"./isEqual-1ldjMOun.js";import"./isObject-DR7tzgbU.js";import"./Button-D-qwXXls.js";import"./ActionButton-DoSJxpA9.js";import"./Checkbox-la-vkOrM.js";import"./useValueChanged-CkYMjklD.js";import"./CollapsiblePanel-4tw6s3Ru.js";import"./MultiColumnSortDialog-DsfGREW-.js";import"./MenuTrigger-CsyLpWwx.js";import"./CompositeItem-BAdlDQDE.js";import"./ToolbarRootContext-Dg4xP7xV.js";import"./getDisabledMountTransitionStyles-D4Potz8p.js";import"./getPseudoElementBounds-B7onhS8M.js";import"./chevron-down-D0grZxr0.js";import"./index-NgNvunFL.js";import"./error-DrQnvBEM.js";import"./BaseCbacBanner-DQ9-w6LD.js";import"./makeExternalStore-B7-iML3E.js";import"./Tooltip-C_98Sk3C.js";import"./PopoverPopup-YEX9TARL.js";import"./toNumber-CqhpYoFk.js";import"./useOsdkClient-DeR_d-JJ.js";import"./tick-zYcRhqQQ.js";import"./DropdownField-BHwdgkO9.js";import"./withOsdkMetrics-CUiTNeFG.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
