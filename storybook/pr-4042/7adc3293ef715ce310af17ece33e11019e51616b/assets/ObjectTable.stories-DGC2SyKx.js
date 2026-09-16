import{j as i}from"./iframe-DyxaUq2K.js";import{O as p}from"./object-table-Cab-U-nF.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DWlIeboC.js";import"./preload-helper-RXXcFWVp.js";import"./Table-CVgNjPUz.js";import"./index-04K8kL6p.js";import"./Dialog-C_c6hTP2.js";import"./cross-DlOxrMTv.js";import"./svgIconContainer-Dx_A2X3i.js";import"./useBaseUiId-B2pmxP6_.js";import"./InternalBackdrop-BBHbL8SK.js";import"./composite-DNSc_3T9.js";import"./index-CXKzX9X0.js";import"./index-Df5y4IMk.js";import"./index-DKo2aq1I.js";import"./useEventCallback-D4ZMCqPC.js";import"./SkeletonBar-Bqj4hPxh.js";import"./LoadingCell-CM1lsDQT.js";import"./ColumnConfigDialog-DtG0KRgU.js";import"./DraggableList-BxvnMcL6.js";import"./search-Dqp-f9oD.js";import"./Input-Ci8-51zi.js";import"./useControlled--GslnpxD.js";import"./Button-BJP0lB5I.js";import"./small-cross-DdubBf-L.js";import"./ActionButton-Dzu9roh2.js";import"./Checkbox-KnYOSa4F.js";import"./useValueChanged-vKl7h4vt.js";import"./CollapsiblePanel-BQrErOfm.js";import"./MultiColumnSortDialog-nacG3IFt.js";import"./MenuTrigger-BxwW9Xk8.js";import"./CompositeItem-BKwp9a98.js";import"./ToolbarRootContext-pFU5HeoC.js";import"./getDisabledMountTransitionStyles-CKsY1twY.js";import"./getPseudoElementBounds-BmT1xLZA.js";import"./chevron-down-DiWP7BJ0.js";import"./index-CRzwoc2n.js";import"./error-BkdYgUyU.js";import"./BaseCbacBanner-BIlh-9tP.js";import"./makeExternalStore-DcK2tIHU.js";import"./Tooltip--dIkHBOm.js";import"./PopoverPopup-DXEKH04o.js";import"./debounce-Dhv4Wot5.js";import"./useOsdkClient-NthVmhh7.js";import"./tick-BSn6tzcY.js";import"./DropdownField-7FFksTTF.js";import"./isEqual-DqocYguF.js";import"./withOsdkMetrics-ac55KtkN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
