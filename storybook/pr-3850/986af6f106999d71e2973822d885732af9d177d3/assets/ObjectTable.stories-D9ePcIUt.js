import{j as i}from"./iframe-B8ePIdgx.js";import{O as p}from"./object-table-BDHL_SDm.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CGexWt1I.js";import"./preload-helper-CO52apix.js";import"./Table-B3G0R4Ei.js";import"./index-DUi6XBWn.js";import"./Dialog-yiIybKoY.js";import"./cross-Z2WIVKHq.js";import"./svgIconContainer-B5mfSzbk.js";import"./useBaseUiId--yhQINEj.js";import"./InternalBackdrop-Cna5j6JC.js";import"./composite-DrvPRKh9.js";import"./index-DzqwBQvc.js";import"./index-BDjNZM-d.js";import"./index-DJ6GgvW1.js";import"./useEventCallback-CqNNi0CJ.js";import"./SkeletonBar-CWitf-97.js";import"./LoadingCell-tI3Ymnd3.js";import"./ColumnConfigDialog-Bd9fLb8z.js";import"./DraggableList-E3xCY56a.js";import"./search-CRVGvOET.js";import"./Input-D21o8IPI.js";import"./useControlled-DkyHp8L_.js";import"./isEqual-9--5X3Q2.js";import"./isObject-BqZ_5db-.js";import"./Button-B1Ldn3Hf.js";import"./ActionButton-BcBaxta7.js";import"./Checkbox-L4xJmh-b.js";import"./useValueChanged-BNoCYxh2.js";import"./CollapsiblePanel-Bp2Y834B.js";import"./MultiColumnSortDialog-43iZe9aA.js";import"./MenuTrigger-C4fe3BSA.js";import"./CompositeItem-DUbz8YTd.js";import"./ToolbarRootContext-CpKnibLo.js";import"./getDisabledMountTransitionStyles-VYuEU4Z8.js";import"./getPseudoElementBounds-KMVduuX9.js";import"./chevron-down-VVimmYFs.js";import"./index-cjRW8DRN.js";import"./error-Cey_f2IB.js";import"./BaseCbacBanner-BvPN6XVJ.js";import"./makeExternalStore-BIU4uaP7.js";import"./Tooltip-BN01tXVt.js";import"./PopoverPopup-Zr6i6uzp.js";import"./toNumber-BEwV3n-j.js";import"./useOsdkClient-B6g5iTpe.js";import"./tick-C9Ba3a3m.js";import"./DropdownField-DHK94NfU.js";import"./withOsdkMetrics-CXP8M-KN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
