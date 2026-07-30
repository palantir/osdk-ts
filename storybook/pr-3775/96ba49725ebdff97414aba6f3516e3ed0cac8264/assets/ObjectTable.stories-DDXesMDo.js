import{j as i}from"./iframe-aCq_g3w6.js";import{O as p}from"./object-table-CaKMIAxT.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CGYyVwMa.js";import"./preload-helper-UUSxO84G.js";import"./Table-BhZHm77h.js";import"./index-CSsMTEyY.js";import"./Dialog-Bk6m_fk0.js";import"./cross-BrgA3kIi.js";import"./svgIconContainer-BOv-jsG1.js";import"./useBaseUiId-BNG6DLH2.js";import"./InternalBackdrop-DFFqIJam.js";import"./composite-BGN3oFgJ.js";import"./index-CxZEKvWq.js";import"./index-2UiSVRF4.js";import"./index-BjzHZnVv.js";import"./useEventCallback-DqEZkPls.js";import"./SkeletonBar-B_KPnLrt.js";import"./LoadingCell-CrBCJB-_.js";import"./ColumnConfigDialog-fedxKc44.js";import"./DraggableList-DOf8Psv5.js";import"./search-DwsH7dY2.js";import"./Input-KoZ5HftR.js";import"./useControlled-C35FdDTC.js";import"./isEqual-DKuKDDtE.js";import"./isObject-DU3nP88y.js";import"./Button-CSGA2Wxl.js";import"./ActionButton-CIToBB-6.js";import"./Checkbox-C8m42RSl.js";import"./useValueChanged-1Yp4y3oX.js";import"./CollapsiblePanel-BL5S39QC.js";import"./MultiColumnSortDialog--DVVYfY1.js";import"./MenuTrigger-DmbJp5Gs.js";import"./CompositeItem-OApa3E9B.js";import"./ToolbarRootContext-BzxLQKxD.js";import"./getDisabledMountTransitionStyles-Bfq6rT7W.js";import"./getPseudoElementBounds-BSxnPPYZ.js";import"./chevron-down-DUptqSW1.js";import"./index-D6Tuy83n.js";import"./error-DqgP0A5_.js";import"./BaseCbacBanner-CUGm4Hep.js";import"./makeExternalStore-B6rRcBgB.js";import"./Tooltip-BguagF7e.js";import"./PopoverPopup-owAcXcNj.js";import"./toNumber-C6mEAZk4.js";import"./useOsdkClient-DqFKaHTk.js";import"./tick-DewssbAl.js";import"./DropdownField-CHjza2Qs.js";import"./withOsdkMetrics-CqGHF823.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
