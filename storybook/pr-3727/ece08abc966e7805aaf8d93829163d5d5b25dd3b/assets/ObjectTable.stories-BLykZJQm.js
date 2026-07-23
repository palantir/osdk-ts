import{j as i}from"./iframe-8mEMf3e5.js";import{O as p}from"./object-table-CBeO6GJv.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BI-eNsmx.js";import"./preload-helper-DbAS9a1v.js";import"./Table-2LaouPg7.js";import"./index--J3l5EbG.js";import"./Dialog-BXa8SM-x.js";import"./cross-UGSNun_i.js";import"./svgIconContainer-BDT9UouZ.js";import"./useBaseUiId-DKi4WO_9.js";import"./InternalBackdrop-CEKXh1r6.js";import"./composite-C_r6gpBa.js";import"./index-BFzy3rwW.js";import"./index-B4h71S0u.js";import"./index-Fnh0SKoA.js";import"./useEventCallback-BA3rmIgm.js";import"./SkeletonBar-B4q-fZON.js";import"./LoadingCell-BtMn-OKA.js";import"./ColumnConfigDialog-yGg0EZmf.js";import"./DraggableList-D8cZ2I0J.js";import"./search-D3-FY_Jd.js";import"./Input-D4BJzKx_.js";import"./useControlled-CxBgkGC_.js";import"./isEqual-DuszkGv8.js";import"./isObject-DLnm7mgx.js";import"./Button-DilAyh-o.js";import"./ActionButton-BYOem6VU.js";import"./Checkbox-DZsB_T0F.js";import"./useValueChanged--MxB3UJn.js";import"./CollapsiblePanel-xxPgX1M9.js";import"./MultiColumnSortDialog-BZMnhRkj.js";import"./MenuTrigger-BuOkqg4V.js";import"./CompositeItem-CxQ7s4vA.js";import"./ToolbarRootContext-zmF5Vdu_.js";import"./getDisabledMountTransitionStyles-BUd0X9ss.js";import"./getPseudoElementBounds-CuDU7ocY.js";import"./chevron-down-C6YJpuG9.js";import"./index-CRqHRu41.js";import"./error-75F6hF38.js";import"./BaseCbacBanner-DIOYHQZK.js";import"./makeExternalStore-BoR92T3E.js";import"./Tooltip-Dy5F6isQ.js";import"./PopoverPopup-ClxUddzo.js";import"./toNumber-D6lWBfW1.js";import"./useOsdkClient-IgGH-bJp.js";import"./tick-hmdyoMoc.js";import"./DropdownField-B__xqiLV.js";import"./withOsdkMetrics-BDnjGfwF.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
