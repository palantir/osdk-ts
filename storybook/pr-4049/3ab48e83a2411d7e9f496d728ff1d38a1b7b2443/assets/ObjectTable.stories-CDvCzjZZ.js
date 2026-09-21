import{j as i}from"./iframe-BCFKBwNO.js";import{O as p}from"./object-table-BI-fWRRG.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BmLzIXQf.js";import"./preload-helper-Brv957vn.js";import"./Table-CNexlFJ3.js";import"./index-D-Y-JsBx.js";import"./Dialog-8zok0XhQ.js";import"./cross-COb2-6gb.js";import"./svgIconContainer-DJ-tdzCi.js";import"./useBaseUiId-DhWedzoZ.js";import"./InternalBackdrop-w16b7Fa9.js";import"./composite-r28fX4bz.js";import"./index-RhQjfChg.js";import"./index-CI-GDb84.js";import"./index-CIbK25r6.js";import"./useEventCallback---Y7uPgD.js";import"./SkeletonBar-Dp_x2eQF.js";import"./LoadingCell-MMJsapFs.js";import"./ColumnConfigDialog-BNjv0wKN.js";import"./DraggableList-BuNGHbii.js";import"./search-cuvXpLTw.js";import"./Input-DblIYKZB.js";import"./useControlled-BM_Yur5U.js";import"./Button-DgFFjm2U.js";import"./small-cross-DZvPn1Ph.js";import"./ActionButton-CCcHuk54.js";import"./Checkbox-DkcYVcVa.js";import"./useValueChanged-C162beI-.js";import"./CollapsiblePanel-CELc9lI_.js";import"./MultiColumnSortDialog-eGV3sokT.js";import"./MenuTrigger-yqfp-VgQ.js";import"./CompositeItem-DrKg3RCP.js";import"./ToolbarRootContext-BgwM3bO2.js";import"./getDisabledMountTransitionStyles-ZdKEJKh5.js";import"./getPseudoElementBounds-DlcoOkhp.js";import"./chevron-down-815YMHZK.js";import"./index-DJgWECAA.js";import"./error-DLaayWkN.js";import"./BaseCbacBanner-CSuRjZdF.js";import"./makeExternalStore-Bhr-T-us.js";import"./Tooltip-Boqdt2X8.js";import"./PopoverPopup-Dg2dGkJN.js";import"./debounce-PdhZTz_Q.js";import"./useOsdkClient-DzUFbc0D.js";import"./tick-BCzVfJh_.js";import"./DropdownField-BQn3rTLQ.js";import"./isEqual-CGdgVv1y.js";import"./withOsdkMetrics-DwU6v8eQ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
