import{j as i}from"./iframe-BdwSD-4g.js";import{O as p}from"./object-table-Dkf_Wsl_.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cek4CQLT.js";import"./preload-helper-Q7k08PSu.js";import"./Table-PC-pI0ZM.js";import"./index-DOSkW-9K.js";import"./Dialog-C2jm4GPq.js";import"./cross-ALmhnM-F.js";import"./svgIconContainer-DA4wNVnR.js";import"./useBaseUiId-Dw0luXrm.js";import"./InternalBackdrop-D1YI8GOv.js";import"./composite-5NyIARcH.js";import"./index-Af48Q6og.js";import"./index-FAuKkFnB.js";import"./index-CxgrbPDy.js";import"./useEventCallback-DfqzSU5_.js";import"./SkeletonBar-D6TZf1Z5.js";import"./LoadingCell-CptRX9Y8.js";import"./ColumnConfigDialog-CzZ4BQy7.js";import"./DraggableList-C1r11s45.js";import"./search-zOT-eX5y.js";import"./Input-DFvD33w1.js";import"./useControlled-D1Q7B9_S.js";import"./Button-DT6t-JAZ.js";import"./small-cross-vRrhE9Ne.js";import"./ActionButton-CSVrvW6D.js";import"./Checkbox-p54CWvtE.js";import"./useValueChanged-CIIin2AA.js";import"./CollapsiblePanel-XzAfxH9Z.js";import"./MultiColumnSortDialog-C4bbbTVf.js";import"./MenuTrigger-CuNIwuZO.js";import"./CompositeItem-_wAlG9yG.js";import"./ToolbarRootContext-BvaeGVZU.js";import"./getDisabledMountTransitionStyles-B9XqalxW.js";import"./getPseudoElementBounds-BdDow4jC.js";import"./chevron-down-Dn6L64Ru.js";import"./index-gxw3sShd.js";import"./error-BrVGJ7z5.js";import"./BaseCbacBanner-C59qxhDp.js";import"./makeExternalStore-BaL0IM38.js";import"./Tooltip-BeEpEYbq.js";import"./PopoverPopup-CkTzI9ep.js";import"./debounce-Bij6cuiB.js";import"./useOsdkClient-BNfS8Hn2.js";import"./tick-BCAUztTc.js";import"./DropdownField-BLDXBK7q.js";import"./isEqual-B34gs6iF.js";import"./withOsdkMetrics-De7Bt3A9.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
