import{j as i}from"./iframe-Wmfq-VZM.js";import{O as p}from"./object-table-DuFaRQDQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-z25Ml3Tp.js";import"./preload-helper-Du2S85FQ.js";import"./Table-gAslYiRN.js";import"./index-CS0Yy-a9.js";import"./Dialog-CMr0H3Ms.js";import"./cross-DVOMc_IS.js";import"./svgIconContainer-Dr38566j.js";import"./useBaseUiId-BxqdO-OV.js";import"./InternalBackdrop-Dt5EJaJf.js";import"./composite-D8Nselg9.js";import"./index-BACLQbWX.js";import"./index-Cyb_urLR.js";import"./index-CkgQRnS-.js";import"./useEventCallback-CFjZA5qB.js";import"./SkeletonBar-Dwj78qcB.js";import"./LoadingCell-tVyhyGyF.js";import"./ColumnConfigDialog-C-2FyhzQ.js";import"./DraggableList-4Q6sDfeT.js";import"./search-DztiYnhe.js";import"./Input-64OaWLA3.js";import"./useControlled-DYwC9uvx.js";import"./Button-KnZtOZhW.js";import"./small-cross-D2I3HjLn.js";import"./ActionButton-Cw-6679X.js";import"./Checkbox-BtVHm2N0.js";import"./useValueChanged-Dm27a27U.js";import"./CollapsiblePanel-Czhz75oi.js";import"./MultiColumnSortDialog-CAr0PnYK.js";import"./MenuTrigger-BYwMSIdZ.js";import"./CompositeItem-DfjKuZSp.js";import"./ToolbarRootContext-DDVqMWIS.js";import"./getDisabledMountTransitionStyles-DUfcCrkU.js";import"./getPseudoElementBounds-IxJEcHej.js";import"./chevron-down-BMFuph0I.js";import"./index-BXiERbEc.js";import"./error-DX3SW9eg.js";import"./BaseCbacBanner-ByUAxktr.js";import"./makeExternalStore-DELeA3LK.js";import"./Tooltip-CGPj4Dbd.js";import"./PopoverPopup-DK71CzjP.js";import"./debounce-DwY3sqQK.js";import"./useOsdkClient-CNJuRTO6.js";import"./tick-CWFk4NDt.js";import"./DropdownField-DrVsqmrK.js";import"./isEqual-BBQhxmN8.js";import"./withOsdkMetrics-Csx3CAie.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
