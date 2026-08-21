import{j as i}from"./iframe-G2sFBblw.js";import{O as p}from"./object-table-CqB2fZjZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bk26tqZa.js";import"./preload-helper-CqRVpl7F.js";import"./Table-BmKnkTaq.js";import"./index-Bf1a_w2A.js";import"./Dialog-D-JPJzBj.js";import"./cross-Cgrm_e1P.js";import"./svgIconContainer-C-G74yOn.js";import"./useBaseUiId-PA0X9Hzc.js";import"./InternalBackdrop-Brf5EOJv.js";import"./composite-Cs5FDNG8.js";import"./index-DQ-VFjK8.js";import"./index-Bz_02AKc.js";import"./index-BGQX8i9w.js";import"./useEventCallback-CGijwG5g.js";import"./SkeletonBar-CsgUPv3i.js";import"./LoadingCell-BSnxDL-9.js";import"./ColumnConfigDialog-DZz228E4.js";import"./DraggableList-Br4xD-0y.js";import"./search-X8OElP0v.js";import"./Input-Bdut2c0i.js";import"./useControlled-D6ZpKCy4.js";import"./Button-DwEHPhHn.js";import"./small-cross-fshzj5mN.js";import"./ActionButton-CI4V1Bp5.js";import"./Checkbox-BGUfbAs3.js";import"./useValueChanged-a00kAoAh.js";import"./CollapsiblePanel-Bt8YdGxn.js";import"./MultiColumnSortDialog-Bt5Yk7aK.js";import"./MenuTrigger-DcqCa7Eb.js";import"./CompositeItem-CDdPDuOE.js";import"./ToolbarRootContext-CKE9jd6d.js";import"./getDisabledMountTransitionStyles-BT5SUph6.js";import"./getPseudoElementBounds-D9lEJUlp.js";import"./chevron-down-eR29A_up.js";import"./index-BOFiGVt1.js";import"./error-DaCdYUUn.js";import"./BaseCbacBanner-CuKGJeVA.js";import"./makeExternalStore-pUJlIKix.js";import"./Tooltip-Ck0lRHyJ.js";import"./PopoverPopup-AM786urk.js";import"./debounce-CKEE8qyw.js";import"./useOsdkClient-DKZLLXCr.js";import"./tick-ySxfpAjM.js";import"./DropdownField-CS4TsSCM.js";import"./isEqual-BQZBvx39.js";import"./withOsdkMetrics-vEES6Ay5.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
