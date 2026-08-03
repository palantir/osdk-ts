import{j as i}from"./iframe-CGXoYzNm.js";import{O as p}from"./object-table-CDJRukBU.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D-jq7w3B.js";import"./preload-helper-BIk0pbFW.js";import"./Table-_m0WJ524.js";import"./index-B-gIGFxM.js";import"./Dialog-B3tENyb1.js";import"./cross-CZLvPMyq.js";import"./svgIconContainer-C2yUySQD.js";import"./useBaseUiId-C9lxuB2E.js";import"./InternalBackdrop-C8oAvnCv.js";import"./composite-Djf7LOAP.js";import"./index-CgUoB6rh.js";import"./index-BsvWREke.js";import"./index-BElCNRLp.js";import"./useEventCallback-CX8TP_4U.js";import"./SkeletonBar-BqzKfT_o.js";import"./LoadingCell-wWZERl_W.js";import"./ColumnConfigDialog-CsNju5Yu.js";import"./DraggableList-CYH6t1FV.js";import"./search-BEs5Tf1l.js";import"./Input-DrVjLFlw.js";import"./useControlled-cr2h64km.js";import"./isEqual-DA2i7ag6.js";import"./isObject-B1jVfnC1.js";import"./Button-C7KwiNiL.js";import"./ActionButton-BGAEhQ3Z.js";import"./Checkbox-Bb8kDQc_.js";import"./useValueChanged-D3XdwU6I.js";import"./CollapsiblePanel-CW40sKj7.js";import"./MultiColumnSortDialog-w9tjiZja.js";import"./MenuTrigger-CdWn6Jeu.js";import"./CompositeItem-B6G0eofa.js";import"./ToolbarRootContext-CHmIfeJy.js";import"./getDisabledMountTransitionStyles-DLecrRJs.js";import"./getPseudoElementBounds-BvW4VCsl.js";import"./chevron-down-vvZtnb7b.js";import"./index-D3FEBDFq.js";import"./error-DhIsr36w.js";import"./BaseCbacBanner-uZzzZFEw.js";import"./makeExternalStore-C-D2sCmQ.js";import"./Tooltip-DqouU193.js";import"./PopoverPopup-wCz21lM9.js";import"./toNumber-rR3YkCjK.js";import"./useOsdkClient-CP_tnrVl.js";import"./tick-KBwgeRib.js";import"./DropdownField-DKcPGVTO.js";import"./withOsdkMetrics-BepqP3Ct.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
