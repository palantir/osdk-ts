import{j as i}from"./iframe-Brg8J0Ke.js";import{O as p}from"./object-table-hZeo6LTs.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-dihU3Nly.js";import"./preload-helper-COdZ72nO.js";import"./Table-BA7Eukxq.js";import"./index-COQGlG7M.js";import"./Dialog-Dpe3KvI5.js";import"./cross-Dp_9NLmV.js";import"./svgIconContainer-CyLntXpn.js";import"./useBaseUiId-CrEPTlGa.js";import"./InternalBackdrop-CBy9ibFR.js";import"./composite-DMhIOFCK.js";import"./index-CsKHzp-V.js";import"./index-BFTo3SXS.js";import"./index-5K_31Uqj.js";import"./useEventCallback-CqQAX7QT.js";import"./SkeletonBar-B-Br-cAJ.js";import"./LoadingCell-Cv1tKHkq.js";import"./ColumnConfigDialog-nf2k-ETq.js";import"./DraggableList-CEgOhlWZ.js";import"./search-DHxEqs_E.js";import"./Input-DQYgvQ0f.js";import"./useControlled-fDswUz3Y.js";import"./isEqual-CBqNX-fs.js";import"./isObject-g0d4C94m.js";import"./Button-BOmasYpo.js";import"./ActionButton-BoL1Ad6J.js";import"./Checkbox-B5T3IccL.js";import"./useValueChanged-BYytUOjM.js";import"./CollapsiblePanel-CjSF9Vu7.js";import"./MultiColumnSortDialog-DiJobGuY.js";import"./MenuTrigger-CZinzVD5.js";import"./CompositeItem-6pHUtZM5.js";import"./ToolbarRootContext-UDxMOJnp.js";import"./getDisabledMountTransitionStyles-D--Cx6cu.js";import"./getPseudoElementBounds-m3pFiWCe.js";import"./chevron-down-WgnX3I4t.js";import"./index-2yQ9AWXN.js";import"./error-DsaiNbdM.js";import"./BaseCbacBanner-DyTn3oZP.js";import"./makeExternalStore-B_s6eB60.js";import"./Tooltip-8riLFYLa.js";import"./PopoverPopup-CL5hQeyv.js";import"./toNumber-6L-Q2eKa.js";import"./useOsdkClient-CxAGnIHh.js";import"./tick-BE21jO5W.js";import"./DropdownField-BZE4mokC.js";import"./withOsdkMetrics-D_xYxDWs.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
